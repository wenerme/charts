import * as YAML from 'https://deno.land/std@0.63.0/encoding/yaml.ts';
import {ensureDir} from 'https://deno.land/std@0.78.0/fs/ensure_dir.ts';
import {exists} from 'https://deno.land/std@0.78.0/fs/exists.ts';

export interface HelmIndex {
  apiVersion: string
  entries: Record<string, HelmIndexEntry[]>
  generated: string
}

export interface HelmIndexEntry {
  annotations: Record<string, string> & {
    category: string
  }
  apiVersion: string
  appVersion: string
  created: string
  dependencies: Array<{ name: string, repository: string, tags: string[], version: string, condition?: string }>
  description: string
  digest: string
  home: string
  icon: string
  keywords: string[]
  maintainers: Array<{ email: string, name: string }>
  name: string
  sources: string[]
  urls: string[]
  version: string
}


export interface MirrorerConf {
  mirrors: MirrorConf[];
}

export interface MirrorConf {
  name: string
  path: string;
  repos: MirrorRepo[]
}

export interface MirrorRepo {
  repo: string;
  path: string;
  charts: string[];
}

export async function loadCharts(file: string) {
  const o = await YAML.parse(Deno.readTextFileSync(file));
  return o as MirrorerConf;
}

export async function loadRepoIndex(repo: string): Promise<HelmIndex> {
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
  return index as HelmIndex;
}

export async function run(cmd: string | string[], opts?: Omit<Deno.RunOptions, 'cmd'>) {
  const p = Deno.run({cmd: typeof cmd === 'string' ? cmd.split(/\s+/) : cmd, ...opts})
  return await wait(p)
}

async function wait(p: Deno.Process) {
  const [status] = await Promise.all([p.status()]);
  p.close();
  if (!status.success) {
    throw new Error(`process exit ${status.code}`);
  }
}
