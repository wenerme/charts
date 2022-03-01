#!/usr/bin/env -S deno run --allow-run --allow-net --unstable --allow-read --allow-write

import yargs from 'https://deno.land/x/yargs/deno.ts';
import {Arguments} from 'https://deno.land/x/yargs/deno-types.ts';
import {ensureDir, exists} from 'https://deno.land/std@0.78.0/fs/mod.ts';
import * as path from 'https://deno.land/std/path/mod.ts';
import {HelmIndex, HelmIndexEntry, loadCharts, loadRepoIndex, MirrorerConf, MirrorRepo, run} from './util.ts';

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
  dryRun: {
    type: 'boolean',
    description: 'skip execute side effects',
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
  .command(
    'doctor',
    'maintain charts',
    (yargs: any) => {
      return yargs.options({
        'dry-run': options.dryRun
      });
    },
    async (argv: Arguments) => {
      await runDoctor(argv);
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

async function runDoctor(argv: Arguments) {
  const conf = argv.config as MirrorerConf;

  for (const mirror of conf.mirrors) {
    let localIndex: HelmIndex
    try {
      localIndex = await loadRepoIndex(mirror.path)
    } catch (e) {
      console.error(`${mirror.path} load repo index failed: ${e}`)
      continue
    }

    for (const repo of mirror.repos) {
      repo.path = mirror.path

      const index = await loadRepoIndex(repo.repo)

      for (const chart of repo.charts) {
        const local = localIndex.entries[chart]
        const remote = index.entries[chart]
        if (!remote) {
          console.warn(`${chart}: remote chart not found`)
          continue
        }

        const updated = []
        for (const l of local) {
          const find = remote.find(v => v.version === l.version)
          if (!find) {
            console.warn(`${l.name}:${l.version} remote chart version not found`)
            continue
          }
          if (find.digest === l.digest) {
            continue
          }
          console.warn(`${l.name}:${l.version} digest mismatch`)

          if (await syncChart(find, {path: repo.path, force: true})) {
            updated.push({name: l.name, version: l.version})
          }
        }
        if (updated.length) {
          console.info(`repo changed - update index`)
          await run(['helm', 'repo', 'index', repo.path]);
        }
      }
    }
  }
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

async function syncChart(target: HelmIndexEntry, {path, force}: { path: string, force?: boolean }) {
  const {name, version} = target

  const tgz = `${path}/${name}-${version}.tgz`;
  if (await exists(tgz) && !force) {
    console.debug(`skip ${name} - ${version} - exists`);
    return false
  }
  console.log(`syncing ${name} - ${version}`);

  await run(['curl', '-fLOC-', '--output-dir', path, target.urls[0]]);
  return true
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

    if (await syncChart(target, {path: dest})) {
      updates.push({name, version: target.version, appVersion: target.appVersion, date: new Date()});
    }
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


