#!/usr/bin/env -S deno run --allow-run --allow-net --unstable --allow-read --allow-write

import yargs from 'https://deno.land/x/yargs/deno.ts';
import {Arguments} from 'https://deno.land/x/yargs/deno-types.ts';
import * as YAML from 'https://deno.land/std@0.63.0/encoding/yaml.ts';
import {ensureDir, exists} from 'https://deno.land/std@0.78.0/fs/mod.ts';
import * as path from 'https://deno.land/std/path/mod.ts';
import dayjs from 'https://cdn.skypack.dev/dayjs';

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

interface MirrorerConf {
  mirrors: MirrorConf[];
}

interface MirrorConf {
  name: string
  path: string;
  repos: MirrorRepo[]
}

interface MirrorRepo {
  repo: string;
  path: string;
  charts: string[];
}

async function loadCharts(file: string) {
  const o = await YAML.parse(Deno.readTextFileSync(file));
  return o as MirrorerConf;
}

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

    const r = Deno.run({cmd: ['curl', '-sfLOC-', '--output-dir', dest, target.urls[0]]});
    await wait(r);
  }

  if (updates.length) {
    console.info('repo changed - indexing');
    const r = Deno.run({cmd: ['helm', 'repo', 'index', dest]});
    await wait(r);

    const message = updates.map((v) => `update ${v.name}:${v.version}`).join('; ');
    Deno.writeTextFileSync('message', message, {append: true});

    const changelog = updates
      .map((v) => `| ${v.name} | ${v.version} | ${v.appVersion} | ${dayjs(v.date).format('YYYY-MM-DD HH:mm:ss')} |`)
      .join('\n');
    Deno.writeTextFileSync('CHANGELOG.md', changelog, {append: true});
  } else {
    console.info(`repo remain same`);
  }
}

async function wait(p: Deno.Process) {
  const [status] = await Promise.all([p.status()]);
  p.close();
  if (!status.success) {
    throw new Error(`process exit ${status.code}`);
  }
}

async function loadRepoIndex(repo: string) {
  const name = repo.replaceAll(/[^a-z0-9]/g, '');
  const tmp = `/tmp/charts/${name}`;
  await ensureDir(tmp);
  const indexJson = `${tmp}/index.json`;
  let index: any;
  if (await exists(indexJson)) {
    const stat = await Deno.stat(indexJson);
    // min
    const diff = (Date.now() - +new Date(stat.mtime || '')) / 1000 / 60;
    if (diff <= 30) {
      console.debug('load index cache');
      index = JSON.parse(Deno.readTextFileSync(indexJson));
    } else {
      console.debug(`index cache expired`, stat.mtime);
    }
  }
  if (!index) {
    const url = `${repo}/index.yaml`;
    console.debug(`fetch index`, url);
    index = await YAML.parse(await fetch(url).then((v) => v.text()));

    Deno.writeTextFileSync(indexJson, JSON.stringify(index, undefined, 2));
  }
  return index;
}
