import yargs, {Arguments} from 'yargs';
import fs from 'fs-extra'
import path from 'node:path'
import {
  getRepoCacheDir,
  HelmChartVersion,
  HelmIndex,
  loadCharts,
  loadRepoIndex,
  MirrorerConf,
  MirrorHelmRepo,
  sha256sum,
  yaml,
} from './util';
import * as semver from 'semver'
import _ from 'lodash'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import 'zx/globals'

const {ensureDir, exists, existsSync} = fs
const log = console

// #!/usr/bin/env -S deno run --allow-env --allow-run --allow-net --unstable --allow-read --allow-write --no-prompt -q

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Shanghai');

const flags = {
  config: {
    alias: 'c',
    type: 'string',
    description: 'yaml charts',
    default: 'mirror.yaml',
    coerce: (arg: any) => {
      return loadCharts(arg);
    },
    global: true,
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
    global: true,
  },
};

interface Options {
  verbose: boolean
  dryRun: boolean
  cache: string
}

const options: Options = {
  verbose: false,
  dryRun: false,
  cache: '/tmp/charts',
};
yargs(process.argv.slice(2))
  .scriptName('mirrors')
  .usage('$0 <cmd> [args]')
  // .env("MIRRORER")
  .middleware(setup)
  .command(
    'fmt <repo>',
    'format helm index.yaml',
    (yargs: any) => {
      yargs.positional('repo', {
        describe: 'helm chat repo path',
        type: 'string',
      });
    },
    format,
  )
  .command(
    'commit',
    'generate commit message & update changelog',
    (yargs: any) => {
    },
    runCommit,
  )
  .command(
    'ls',
    'list charts',
    (yargs: any) => {
      return yargs.options({charts: flags.charts});
    },
    async (argv: Arguments) => {
      listCharts(argv.config);
    },
  )
  .command(
    'sync',
    'sync charts',
    (yargs: any) => {
      return yargs.options({
        'dry-run': flags.dryRun,
        mirror: {
          type: 'array',
          describe: 'only sync specified mirror',
        },
      });
    },
    runSync,
  )
  .command(
    'doctor',
    'maintain charts',
    (yargs: any) => {
      return yargs.options({
        'dry-run': flags.dryRun,
      });
    },
    runDoctor,
  )
  .command('manifest', 'generate manifest doc', () => {
  }, runGenManifest)
  .command(
    'g',
    'generate',
    (yargs: any) => {
      return yargs.command(
        'manifest',
        'generate manifest doc',
        () => {
        },
        runGenManifest,
      );
    },
    (argv: Arguments) => {
      console.error(`generate what ?`);
    },
  )
  .options({
    verbose: flags.verbose,
    config: flags.config,
    cache: flags.cache,
  })
  .strictCommands()
  .demandCommand(1)
  .parse();

async function runGenManifest(argv: Arguments) {
  const conf = argv.config as MirrorerConf;
  const out = [];

  out.push(
    'Repo | Charts',
    '-----|-------',
    ...conf.mirrors
      .filter((v) => v.enabled !== false)
      .flatMap((v) => v.repos)
      .filter((r) => 'repo' in r && r.charts.length)
      .map((r) => r as MirrorHelmRepo)
      .sort((a, b) => b.charts.length - a.charts.length)
      .map((r) => `${r.repo} | ${r.charts.length}`),
  );
  out.push('');

  for (const mirror of conf.mirrors.filter((v) => v.enabled !== false)) {
    out.push(`## ${mirror.name}`);
    out.push('');
    out.push('Name | Version | App Version | Created');
    out.push('-----|---------|-------------|--------');
    const index = await loadRepoIndex(mirror.path);
    const list = Object.values(index.entries)
      .map((v) => v[0])
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((v) =>
        [
          v.name,
          v.version,
          v.appVersion,
          v.created ? dayjs(v.created).tz().format('YYYY-MM-DD HH:mm') : '',
        ].join(' | ')
      )
      .join('\n');
    out.push(list);
    out.push('');
  }
  const o = out.join('\n');
  await fs.writeFile('MANIFEST.md', o);
  let t = await fs.readFile('README.md', 'utf-8');
  t = t.replace(
    /(?<start><!-- BEGIN MANIFEST -->).*(?<end><!-- END MANIFEST -->)/s,
    (...args) => {
      const {start, end} = args.at(-1) as any;
      return [start, o, end].join('\n');
    },
  );
  await fs.writeFile('README.md', t);
}

async function runCommit(argv: Arguments) {
  const changes = JSON.parse(await fs.readFile('sync.json', 'utf-8')) as Record<
    string,
    HelmChartVersion[]
  >;
  const all = Object.values(changes).flatMap((v) => v);
  if (!all.length) {
    log.info('nothing changed');
    return;
  }
  const csv = Object.entries(changes)
    .flatMap(([repo, charts]) =>
      charts.map((v) =>
        [
          repo,
          v.name,
          v.version,
          v.appVersion,
          new Date(v.created).toISOString(),
        ].join(',')
      )
    )
    .join('\n');

  await fs.appendFile('CHANGELOG.csv', csv + '\n');

  const message = 'update ' +
    all.map((v) => `${v.name}:${v.version}`).join('; ');
  await fs.writeFile('message', message);
  console.log(message);
}

async function format({repo}: { repo: string }) {
  if (!repo) {
    throw new Error('no repo');
  }

  const empty = `${options.cache}/empty/charts`;
  await ensureDir(empty);
  await fs.writeFile(
    `${empty}/index.yaml`,
    yaml({
      apiVersion: 'v1',
      entries: [],
      generated: new Date(),
    }),
  );
  await $`helm repo index ${empty} --merge ${repo}/index.yaml`
  // await run(['helm', 'repo', 'index', empty, '--merge', `${repo}/index.yaml`]);
  await fs.copyFile(`${empty}/index.yaml`, `${repo}/index.yaml`);
}

async function setup(argv: Arguments) {
  options.verbose = argv.verbose;
  options.dryRun = argv['dry-run'];
  options.cache = argv.cache ?? '/tmp/charts';
  log.debug(`TZ=${dayjs.tz.guess()}`);

  // let level: LevelName = 'INFO';
  // if (options.verbose) {
  //   level = 'DEBUG';
  // }
  // await log.setup({
  //   handlers: {
  //     console: new log.handlers.ConsoleHandler('DEBUG'),
  //   },
  //
  //   loggers: {
  //     default: {
  //       level,
  //       handlers: ['console'],
  //     },
  //   },
  // });
}

function listCharts(charts: MirrorerConf) {
  console.log(
    charts.mirrors
      .flatMap((v) =>
        v.repos.flatMap((v) => {
          if ('repo' in v) {
            return v.charts;
          }
          return v.cvs;
        })
      )
      .join('\n'),
  );
}

async function runDoctor(argv: Arguments) {
  const conf = argv.config as MirrorerConf;

  for (const mirror of conf.mirrors) {
    let localIndex: HelmIndex;
    try {
      localIndex = await loadRepoIndex(mirror.path);
    } catch (e) {
      log.error(`${mirror.path} load repo index failed: ${e}`);
      continue;
    }

    const updated = [];

    for (const repo of mirror.repos) {
      if (!('repo' in repo)) {
        continue;
      }

      repo.path = mirror.path;
      const index = await loadRepoIndex(repo.repo);

      try {
        for (const chart of repo.charts) {
          const local = localIndex.entries[chart];
          const remote = index.entries[chart];
          if (!remote) {
            log.warn(`${chart}: remote chart not found`);
            continue;
          }

          for (const l of local) {
            if (conf.ignored.includes(`${l.name}:${l.version}`)) {
              continue;
            }
            const find = remote.find((v) => v.version === l.version);

            if (!find) {
              log.warn(
                `${l.name}:${l.version} remote chart version not found`,
              );
              await fs.remove(`${repo.path}/${l.name}-${l.version}.tgz`);
              continue;
            }
            if (find.digest !== l.digest) {
              log.warn(`${l.name}:${l.version} digest mismatch`);
              log.info(
                `expected ${
                  getChartURL(find, repo.repo)
                } ${find.digest} got ${l.digest}`,
              );
              try {
                if (
                  await syncChart(find, {
                    path: repo.path,
                    force: true,
                    repo: repo.repo,
                  })
                ) {
                  // update digest but may not match
                  l.digest = find.digest;
                  updated.push({
                    name: l.name,
                    version: l.version,
                    origin: find,
                  });
                }
              } catch (e) {
                const url = getChartURL(find, repo.repo);
                if (await isNotFound(url)) {
                  log.warn(
                    `${l.name}:${l.version} remote chart url not found ${url}`,
                  );
                  await fs.remove(`${repo.path}/${l.name}-${l.version}.tgz`);
                  continue;
                }
                throw e;
              }
            }
            // time match?

            // Object.assign(l, find)
            // prevent time change
            l.created = find.created;
          }
        }
      } catch (e) {
        await fs.writeFile(`${repo.path}/index.yaml`, yaml(localIndex));
        throw e;
      }
    }

    if (updated.length) {
      log.info(`docker fixed ${updated.length}`);
    }
    await fs.writeFile(`${mirror.path}/index.yaml`, yaml(localIndex));
    await format({repo: mirror.path});
  }
}

async function runSync(argv: Arguments) {
  const conf = argv.config as MirrorerConf;
  const only = argv.mirror ?? [];
  try {
    await fs.remove('sync.json');
  } catch (e) {
    // skip
  }

  const updates: Record<string, HelmChartVersion[]> = {};
  for (const mirror of conf.mirrors) {
    const mirrorName = mirror.name;
    if (!mirrorName) {
      throw new Error(`no mirror name`);
    }
    if (
      (only.length && !only.includes(mirrorName)) || mirror.enabled === false
    ) {
      log.debug(`skip mirror ${mirrorName}`);
      continue;
    }

    let vers: HelmChartVersion[] = [];
    for (const repo of mirror.repos) {
      if (repo.enabled === false) {
        log.debug(`skip repo ${getRepoName(repo)}`);
        continue;
      }
      if ('repo' in repo) {
        repo.path = mirror.path;
        vers = vers.concat(await syncMirror(repo));
      }
    }
    updates[mirrorName] = vers;
    log.info(
      `${mirrorName} mirror updated (${vers.length}) ${
        vers.map((v) => `${v.name}:${v.version}`).join(', ')
      }`,
    );
  }

  const all = Object.values(updates).flatMap((v) => v);
  log.info(`sync ${all.length}`);
  await fs.writeFile('sync.json', JSON.stringify(updates, null, 2));
}

function getRepoName(repo: any) {
  return repo.repo || repo.cvs;
}

async function syncChart(
  target: HelmChartVersion,
  {path, force, repo, cache = path}: {
    path: string;
    cache?: string;
    force?: boolean;
    repo: string;
  },
) {
  const {name, version} = target;

  const tgz = `${path}/${name}-${version}.tgz`;
  const dist = `${cache}/${name}-${version}.tgz`;
  if ((await exists(tgz)) && !force) {
    log.debug(`${name}:${version} - exists`);
    return false;
  }
  if (cache !== path && (await exists(dist))) {
    const digest = await sha256sum(dist);
    if (digest === target.digest) {
      log.debug(`${name}:${version} - cache exists`);
      return false;
    }
    log.info(`${name}:${version} - cache exists but digest mismatch`);
  }

  if (options.dryRun && cache === path) {
    log.info(`[DRY] syncing ${name}:${version} from ${repo}`);
    return true;
  }

  log.info(`syncing ${name}:${version} from ${repo}`);

  const url = getChartURL(target, repo);
  // force || '-C-',
  const cmd = [
    '-fLO',
    options.verbose ? '-s' : '',
    '--create-dirs',
    '--output-dir',
    cache,
    url,
  ];
  await $`curl ${cmd}`;
  await touch({path: dist, date: new Date(target.created)});
  return true;
}

// async function helmRepoIndex(path: string) {
//   await run(['helm', 'repo', 'index', path]);
// }

export async function touch({
                              path,
                              date,
                              mtime = true,
                              atime = true,
                            }: {
  path: string;
  date: Date;
  mtime?: boolean;
  atime?: boolean;
}) {
  const flags = [
    '--no-create',
    mtime && '-m',
    atime && '-a',
    '-d',
    date.toJSON(),
    path,
  ];
  await $`touch ${flags}`;
}

async function syncMirror(mr: MirrorHelmRepo): Promise<HelmChartVersion[]> {
  const repo = mr.path;
  const dest = path.resolve(process.cwd(), repo);
  log.debug(`ensure ${dest}`);

  await ensureDir(dest);
  const index = await loadRepoIndex(mr.repo);

  const updates: HelmChartVersion[] = [];
  const cache = `${getRepoCacheDir(mr.repo)}/charts`;
  for (const name of mr.charts) {
    const all = index.entries[name];
    const ver = all.find((v) => {
      const ver = semver.parse(v.version);
      return ver && !ver.prerelease.length;
    });
    if (!ver) {
      log.warn(
        `${name}: no released version found latest is ${all[0].version}`,
      );
      continue;
    }

    if (existsSync(`${dest}/${name}-${ver.version}.tgz`)) {
      continue;
    }
    await syncChart(ver, {path: dest, cache, repo: mr.repo});
    log.info(`${ver.name}:${ver.version} sync`);
    updates.push({...ver});
  }

  if (updates.length) {
    await fs.writeFile(
      `${cache}/index.yaml`,
      yaml({
        apiVersion: 'v1',
        entries: _.groupBy(updates, 'name'),
        generated: new Date(),
      }),
    );
    let flags = [
      'repo',
      'index',
      cache,
      '--merge',
      `${repo}/index.yaml`,
    ];
    await $`helm ${flags}`;

    if (options.dryRun) {
      log.info(`[DRY] ${repo}: repo changed - indexing`);
      return updates;
    }

    log.info(`${repo}: repo changed - indexing`);

    await fs.copyFile(`${cache}/index.yaml`, `${repo}/index.yaml`);
    await $`sh -c 'mv ${cache}/*.tgz ${repo}'`
  } else {
    log.debug(`${repo}: repo unchanged`);
  }
  return updates;
}

export function getChartURL(target: HelmChartVersion, repo: string) {
  return new URL(target.urls[0], repo + '/').toString();
}

export function isNotFound(url: string): Promise<boolean> {
  return fetch(url, {method: 'HEAD'}).then((v) => v.status === 404);
}
