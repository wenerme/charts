#!/usr/bin/env -S deno run --allow-run --allow-net --unstable --allow-read --allow-write

import yargs from 'https://deno.land/x/yargs/deno.ts';
import {Arguments} from 'https://deno.land/x/yargs/deno-types.ts';
import {ensureDir, exists} from 'https://deno.land/std@0.78.0/fs/mod.ts';
import * as path from 'https://deno.land/std/path/mod.ts';
import {loadCharts, loadRepoIndex, MirrorerConf, MirrorRepo, run} from './util.ts';

const options = {
  config: {
    alias: 'c',
    type: 'string',
    description: 'yaml charts',
    default: 'mirror.yaml',
    coerce: (arg: any) => {
      return loadCharts(arg);
    },
  },
  verbose: {
    type: 'boolean',
    description: 'Run with verbose logging',
    global: true,
  },
  charts: {
    type: 'string',
    description: 'yaml charts',
    default: 'charts.yaml',
  },
  to: {
    type: 'string',
    description: 'target local repo',
    default: 'charts',
  },
  cache: {
    type: 'string',
    description: 'cache dir',
    default: '/tmp/charts',
  },
};
yargs(Deno.args)
  .scriptName('mirrors')
  .usage('$0 <cmd> [args]')
  // .env("MIRRORER")
  .command(
    'ls',
    'list charts',
    (yargs: any) => {
      return yargs.options({charts: options.charts});
    },
    async (argv: Arguments) => {
      listCharts(argv.config);
    }
  )
  .command(
    'sync',
    'sync charts',
    (yargs: any) => {
      return yargs.options({
        charts: options.charts,
        to: options.to,
      });
    },
    async (argv: Arguments) => {
      await sync(argv);
    }
  )
  .options({
    verbose: options.verbose,
    config: options.config,
  })
  .strictCommands()
  .demandCommand(1)
  .parse();

function listCharts(charts: MirrorerConf) {
  console.log(charts.mirrors.flatMap((v) => v.repos.flatMap(v => v.charts)).join('\n'));
}

async function sync(argv: Arguments) {
  const conf = argv.config as MirrorerConf;
  for (const mirror of conf.mirrors) {
    for (const repo of mirror.repos) {
      repo.path = mirror.path
      await syncMirror(repo);
    }
  }
}

async function syncMirror(mr: MirrorRepo) {
  const dest = path.resolve(Deno.cwd(), mr.path);
  console.debug('ensure', dest);

  await ensureDir(dest);
  const index = await loadRepoIndex(mr.repo);

  const updates = [];
  for (const name of mr.charts) {
    const list = index.entries[name];
    const target = list[0];

    const tgz = `${dest}/${name}-${target.version}.tgz`;
    if (await exists(tgz)) {
      console.debug(`skip ${name} - ${target.version} - exists`);
      continue;
    }
    console.log(`syncing ${name} - ${target.version}`);
    updates.push({name, version: target.version, appVersion: target.version, date: new Date()});

    await run(['curl', '-sfLOC-', '--output-dir', dest, target.urls[0]]);
  }

  if (updates.length) {
    console.info('repo changed - indexing');
    await run(['helm', 'repo', 'index', dest]);

    const message = updates.map((v) => `update ${v.name}:${v.version}`).join('; ');
    Deno.writeTextFileSync('message', message, {append: true});

    const changelog = updates
      .map((v) => [v.name, v.version, v.appVersion, v.date.toISOString()].join(','))
      .join('\n');
    Deno.writeTextFileSync('CHANGELOG.csv', changelog, {append: true});
  } else {
    console.info(`repo remain same`);
  }
}


