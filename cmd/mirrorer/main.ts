#!/usr/bin/env -S deno run --allow-env --allow-run --allow-net --unstable --allow-read --allow-write

import yargs from 'https://deno.land/x/yargs/deno.ts';
import {Arguments} from 'https://deno.land/x/yargs/deno-types.ts';
import {ensureDir, exists} from 'https://deno.land/std@0.78.0/fs/mod.ts';
import * as path from 'https://deno.land/std/path/mod.ts';
import {HelmIndex, HelmIndexEntry, loadCharts, loadRepoIndex, MirrorerConf, MirrorRepo, run, yaml} from './util.ts';
import * as YAML from 'https://deno.land/std@0.127.0/encoding/yaml.ts';
import * as log from 'https://deno.land/std@0.127.0/log/mod.ts';
import {LevelName} from 'https://deno.land/std@0.127.0/log/mod.ts';

const flags = {
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
const options = {
  verbose: false,
  dryRun: false,
  cache: '/tmp/charts',
}
yargs(Deno.args)
  .scriptName('mirrors')
  .usage('$0 <cmd> [args]')
  // .env("MIRRORER")
  .command(
    'ls',
    'list charts',
    (yargs: any) => {
      return yargs.options({charts: flags.charts});
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
        charts: flags.charts,
        to: flags.to,
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
        'dry-run': flags.dryRun
      });
    },
    async (argv: Arguments) => {
      await runDoctor(argv);
    }
  )
  .options({
    verbose: flags.verbose,
    config: flags.config,
  })
  .middleware(async (argv: Arguments) => {
    options.verbose = argv.verbose
    options.dryRun = argv['dry-run']
    options.cache = argv.cache

    let level: LevelName = 'INFO'
    if (options.verbose) {
      level = 'DEBUG'
    }
    await log.setup({
      handlers: {
        console: new log.handlers.ConsoleHandler('DEBUG'),
      },

      loggers: {
        default: {
          level,
          handlers: ['console'],
        },
      },
    });
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
      log.error(`${mirror.path} load repo index failed: ${e}`)
      continue
    }

    const updated = []

    for (const repo of mirror.repos) {
      repo.path = mirror.path

      const index = await loadRepoIndex(repo.repo)

      try {
        for (const chart of repo.charts) {
          const local = localIndex.entries[chart]
          const remote = index.entries[chart]
          if (!remote) {
            log.warning(`${chart}: remote chart not found`)
            continue
          }

          for (const l of local) {
            if (conf.ignored.includes(`${l.name}:${l.version}`)) {
              continue
            }
            const find = remote.find(v => v.version === l.version)

            if (!find) {
              log.warning(`${l.name}:${l.version} remote chart version not found`)
              await Deno.remove(`${repo.path}/${l.name}-${l.version}.tgz`)
              continue
            }
            if (find.digest !== l.digest) {
              log.warning(`${l.name}:${l.version} digest mismatch`)
              log.info(`expected ${getChartURL(find, repo.repo)} ${find.digest} got ${l.digest}`)
              try {
                if (await syncChart(find, {path: repo.path, force: true, repo: repo.repo})) {
                  // update digest but may not match
                  l.digest = find.digest
                  updated.push({name: l.name, version: l.version, origin: find})
                }
              } catch (e) {
                const url = getChartURL(find, repo.repo);
                if (await isNotFound(url)) {
                  log.warning(`${l.name}:${l.version} remote chart url not found ${url}`)
                  await Deno.remove(`${repo.path}/${l.name}-${l.version}.tgz`)
                  continue
                }
                throw e
              }
            }
            // time match?

            // Object.assign(l, find)
            // prevent time change
            l.created = find.created
          }
        }
      } catch (e) {
        Deno.writeTextFileSync(`${repo.path}/index.yaml`, yaml(localIndex))
        throw e
      }
    }

    if (updated.length) {
      log.info(`repo changed - update index`)
      // await helmRepoIndex(mirror.path)
      Deno.writeTextFileSync(`${mirror.path}/index.yaml`, yaml(localIndex))
    } else {
      Deno.writeTextFileSync(`${mirror.path}/index.yaml`, yaml(localIndex))
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

async function syncChart(target: HelmIndexEntry, {path, force, repo}: { path: string, force?: boolean, repo: string }) {
  const {name, version} = target

  const tgz = `${path}/${name}-${version}.tgz`;
  if (await exists(tgz) && !force) {
    log.debug(`skip ${name} - ${version} - exists`);
    return false
  }
  log.info(`syncing ${name}:${version} from ${repo}`);

  const url = getChartURL(target, repo)
  // force || '-C-',
  const cmd = ['curl', '-fLO', options.verbose || '-s', '--output-dir', path, url]
  await run(cmd);
  await touch({path: tgz, date: new Date(target.created)})
  return true
}

async function helmRepoIndex(path: string) {
  await run(['helm', 'repo', 'index', path]);
}

export async function touch({
                              path,
                              date,
                              mtime = true,
                              atime = true
                            }: { path: string, date: Date, mtime?: boolean, atime?: boolean }) {
  await run(['touch', '--no-create', mtime && '-m', atime && '-a', '-d', date.toJSON(), path])
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

    if (await syncChart(target, {path: dest, repo: mr.repo})) {
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


export function getChartURL(target: HelmIndexEntry, repo: string) {
  return new URL(target.urls[0], repo + '/').toString()
}

export function isNotFound(url: string): Promise<boolean> {
  return fetch(url, {method: 'HEAD'}).then(v => v.status === 404)
}
