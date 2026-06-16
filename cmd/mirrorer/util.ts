import {createHash} from 'node:crypto'
import {createReadStream} from 'node:fs'
import YAML from 'yaml'
import fs from 'fs-extra'

const {exists} = fs
const log = console

export interface HelmIndex {
  apiVersion: string;
  entries: Record<string, HelmChartVersion[]>;
  generated: string;
}

// https://github.com/helm/helm/blob/65d8e72504652e624948f74acbba71c51ac2e342/pkg/repo/index.go#L252-L275
export interface HelmChartVersion {
  annotations: Record<string, string> & {
    category: string;
  };
  apiVersion: string;
  appVersion: string;
  created: string;
  dependencies: Array<
    {
      name: string;
      repository: string;
      tags: string[];
      version: string;
      condition?: string;
    }
  >;
  description: string;
  // SHA256
  digest: string;
  home: string;
  icon: string;
  keywords: string[];
  maintainers: Array<{ email: string; name: string }>;
  name: string;
  sources: string[];
  urls: string[];
  version: string;
}

export interface MirrorerConf {
  mirrors: MirrorConf[];
  ignored: string[];
}

export interface MirrorConf {
  name: string;
  path: string;
  enabled?: boolean;
  repos: Array<MirrorRepo>;
}

export type MirrorRepo = MirrorCVSRepo | MirrorHelmRepo;

export interface MirrorCVSRepo {
  cvs: string;
  path: string;
  enabled?: boolean;
}

export interface MirrorHelmRepo {
  repo: string;
  path: string;
  charts: string[];
  cvs?: string;
  enabled?: boolean;
}

export async function loadCharts(file: string) {
  const o = await YAML.parse(await fs.readFile(file, 'utf-8'));
  return o as MirrorerConf;
}

export function getRepoCacheDir(repo: string, cacheRoot = '/tmp/charts') {
  const name = repo.replaceAll(/[^a-z0-9]/g, '');
  const dir = `${cacheRoot}/${name}`;
  fs.ensureDirSync(dir)
  return dir;
}

export async function loadRepoIndex(repo: string, opts: { cacheRoot?: string } = {}): Promise<HelmIndex> {
  if (!/^https?:/.test(repo)) {
    const source = `${repo}/index.yaml`;
    return parseHelmIndex(await fs.readFile(source, 'utf-8'), source);
  }

  const tmp = getRepoCacheDir(repo, opts.cacheRoot);
  const indexJson = `${tmp}/index.json`;
  let index: any;
  if (await exists(indexJson)) {
    const stat = await fs.stat(indexJson);
    // min
    const diff = (Date.now() - +new Date(stat.mtime || '')) / 1000 / 60;
    if (diff <= 120) {
      log.debug(`${repo}: load index cache`);
      index = JSON.parse(await fs.readFile(indexJson, 'utf-8'));
    } else {
      log.debug(`${repo}: index cache expired ${stat.mtime}`);
    }
  }
  if (!index) {
    const url = new URL('index.yaml', repo.endsWith('/') ? repo : `${repo}/`).toString();
    console.debug(`${repo}: fetch index`, url);
    const response = await fetchWithRetry(url, {
      headers: {
        accept: 'application/x-yaml,text/yaml,text/plain,*/*',
      },
    });
    const text = await response.text();
    const contentType = response.headers.get('content-type') || 'unknown content-type';

    if (!response.ok) {
      throw new Error(
        `${repo}: fetch index failed: HTTP ${response.status} ${response.statusText} (${contentType}) from ${url}; first line: ${firstLine(text)}`,
      );
    }
    if (/^\s*</.test(text)) {
      throw new Error(
        `${repo}: expected Helm index YAML but got ${contentType} from ${url}; first line: ${firstLine(text)}`,
      );
    }

    index = parseHelmIndex(text, url);
    await fs.writeFile(indexJson, JSON.stringify(index, undefined, 2));
  }
  return index as HelmIndex;
}

async function fetchWithRetry(url: string, init: RequestInit, attempts = 3) {
  let lastError: unknown;
  for (let attempt = 1; attempt <= attempts; attempt++) {
    try {
      return await fetch(url, init);
    } catch (e) {
      lastError = e;
      if (attempt === attempts) {
        break;
      }
      const delayMs = attempt * 1000;
      log.warn(`${url}: fetch failed (${errorMessage(e)}), retry ${attempt}/${attempts - 1} in ${delayMs}ms`);
      await new Promise((resolve) => setTimeout(resolve, delayMs));
    }
  }
  throw new Error(`${url}: fetch index failed after ${attempts} attempts: ${errorMessage(lastError)}`);
}

function parseHelmIndex(text: string, source: string): HelmIndex {
  let index: any;
  try {
    index = YAML.parse(text);
  } catch (e) {
    throw new Error(`${source}: parse index.yaml failed: ${errorMessage(e)}; first line: ${firstLine(text)}`);
  }

  if (!index || typeof index !== 'object') {
    throw new Error(`${source}: invalid Helm index: expected object, got ${typeof index}`);
  }
  if (!index.entries || typeof index.entries !== 'object') {
    throw new Error(`${source}: invalid Helm index: missing entries object`);
  }
  return index as HelmIndex;
}

function firstLine(text: string) {
  return JSON.stringify((text || '').split(/\r?\n/, 1)[0]?.slice(0, 200) ?? '');
}

function errorMessage(e: unknown) {
  return e instanceof Error ? e.message : String(e);
}

export async function sha256sum(file: string) {
  const hash = createHash('sha256');
  for await (const chunk of createReadStream(file)) {
    hash.update(chunk as Buffer);
  }
  return hash.digest('hex');
}

export function yaml(o: any) {
  return YAML.stringify(o, {lineWidth: 120});
}
