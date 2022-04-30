import * as YAML from "https://deno.land/std@0.127.0/encoding/yaml.ts";
import { ensureDirSync } from "https://deno.land/std@0.127.0/fs/ensure_dir.ts";
import { exists } from "https://deno.land/std@0.127.0/fs/exists.ts";
import * as log from "https://deno.land/std@0.127.0/log/mod.ts";

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
  const o = await YAML.parse(Deno.readTextFileSync(file));
  return o as MirrorerConf;
}

export function getRepoCacheDir(repo: string) {
  const name = repo.replaceAll(/[^a-z0-9]/g, "");
  const dir = `/tmp/charts/${name}`;
  ensureDirSync(dir);
  return dir;
}

export async function loadRepoIndex(repo: string): Promise<HelmIndex> {
  if (!/^https?:/.test(repo)) {
    const index = await YAML.parse(Deno.readTextFileSync(`${repo}/index.yaml`));
    return index as HelmIndex;
  }
  const tmp = getRepoCacheDir(repo);
  const indexJson = `${tmp}/index.json`;
  let index: any;
  if (await exists(indexJson)) {
    const stat = await Deno.stat(indexJson);
    // min
    const diff = (Date.now() - +new Date(stat.mtime || "")) / 1000 / 60;
    if (diff <= 120) {
      log.debug(`${repo}: load index cache`);
      index = JSON.parse(Deno.readTextFileSync(indexJson));
    } else {
      log.debug(`${repo}: index cache expired ${stat.mtime}`);
    }
  }
  if (!index) {
    const url = `${repo}/index.yaml`;
    console.debug(`${repo}: fetch index`, url);
    index = await YAML.parse(await fetch(url).then((v) => v.text()));

    Deno.writeTextFileSync(indexJson, JSON.stringify(index, undefined, 2));
  }
  return index as HelmIndex;
}

export async function run(
  exec: string | any[],
  opts?: Omit<Deno.RunOptions, "cmd">,
) {
  let cmd = typeof exec === "string" ? exec.split(/\s+/) : exec;
  cmd = cmd.filter((v) => typeof v === "string");
  log.debug(`> ${cmd.join(" ")}`);
  const p = Deno.run({ cmd: cmd, ...opts });
  await wait(p);
  if (opts?.stdout === "piped") {
    const decoder = new TextDecoder("utf-8");
    return decoder.decode(await p.output());
  }
  return;
}

export async function sha256sum(file: string) {
  const out = await run(["sha256sum", file], { stdout: "piped" });
  return out?.split(/\s/)[0].trim();
}

async function wait(p: Deno.Process) {
  const [status] = await Promise.all([p.status()]);
  p.close();
  if (!status.success) {
    throw new Error(`process exit ${status.code}`);
  }
}

export function yaml(o: any) {
  return YAML.stringify(o, { noArrayIndent: true, lineWidth: 120 });
}
