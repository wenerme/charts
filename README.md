# Helm Charts

Collection of offcial charts.

```bash
# 阿里云 CDN
helm repo add wener https://charts.wener.tech
helm search repo wener/

# Github Pages
helm repo add wener https://wenerme.github.io/charts
helm search repo wener/

# wener/charts
helm repo add weners https://charts.wener.tech/wener
helm search repo weners/
```

**[Demo YAML manifets for test](https://github.com/wenerme/charts/tree/master/public/s)**

```bash
kubectl apply -f https://charts.wener.tech/s/whoami.deploy.yaml
kubectl apply -f https://charts.wener.tech/s/whoami.svc.yaml
kubectl apply -f https://charts.wener.tech/s/whoami.ingress.yaml
```

## 镜像 Charts

### 动机

- Helm 官方 charts 已经在停止维护阶段，目前要求应用方自行维护和提供 REPO
- 通常官方 Chart 都在一个独立仓库，独立仓库通常只包含一个 Chart
- 仓库多了过后导致 `helm repo update` 非常慢
- 仓库多了过后查找 Chart 也困难
- 有些仓库被 GFW 拦截 - 镜像后易于访问

> [helm/stable 状态 ](https://github.com/helm/charts#status-of-the-project)
>
> 目前正在弃用，于 2020.11.13 停止维护，charts 由应用方自行维护。

### CI

- 基于 GitHub Action 自动拉取 Chart
- 基于 GitHub 定时 30 分钟 更新一次

---

## Mirror charts

### WHY

- Helm stable charts repo will stop maintain on Nov 13, 2020.
- Official repo only contain one chart - hard to find
- Too many repos cause `helm repo update` slow
- GFW Friendly

> [Status of helm stable charts](https://github.com/helm/charts#status-of-the-project)
>
> Helm stable repo is deprecating, will stop maintain on Nov 13, 2020.

## HOW

- Auto package based on Github Action
- Sync every 30min

## DEV

```bash
# only clone charts
git clone --depth=1 --single-branch --branch gh-pages https://github.com/wenerme/charts charts

# if already cloned repo checkout charts
git worktree add charts gh-pages
```

# Manifest

<!-- BEGIN MANIFEST -->
## main

Name | Version | App Version | Created
-----|---------|-------------|--------
alpine | 1.0.0 | v2 | 2022-03-01 23:04
ambassador | 6.9.4 | v1 | 2022-03-01 23:21
argo | 1.0.0 | v2 | 2022-03-01 23:04
argo-cd | 3.34.0 | v2 | 2022-03-02 02:17
argo-workflows | 0.11.0 | v2 | 2022-03-02 00:59
argocd-applicationset | 1.11.0 | v2 | 2022-02-17 16:19
argocd-notifications | 1.8.0 | v2 | 2022-02-02 05:49
athens-proxy | 0.5.1 | v1 | 2022-02-25 11:31
cadence | 0.23.0 | v1 | 2022-03-01 23:05
cert-manager | v1.7.1 | v1 | 2022-02-04 23:58
cockroachdb | 7.0.0 | v1 | 2022-02-25 06:46
consul | 0.41.1 | v2 | 2022-02-25 01:41
dapr | 1.6.0 | v1 | 2022-01-25 04:24
emissary-ingress | 7.3.2 | v1 | 2022-03-01 23:22
filebrowser | 1.0.0 | v2 | 2022-03-01 23:05
frpc | 1.0.1 | v2 | 2022-03-01 23:05
frps | 1.0.1 | v2 | 2022-03-01 23:05
gitea | 5.0.1 | v2 | 2022-01-20 16:23
gitlab | 5.8.2 | v1 | 2022-02-26 06:18
gitlab-runner | 0.38.0 | v1 | 2022-02-21 06:21
grafana | 6.23.0 | v2 | 2022-03-01 12:58
haproxy-ingress | 0.13.6 | v2 | 2022-01-23 02:29
harbor | 1.8.1 | v1 | 2021-12-20 14:38
hazelcast | 5.3.4 | v1 | 2022-02-16 14:26
ingress-nginx | 4.0.17 | v2 | 2022-02-07 04:19
ingresses | 1.0.0 | v2 | 2022-03-01 23:05
keycloak | 16.1.0 | v2 | 2022-03-01 23:05
kube-prometheus | 6.6.9 | v2 | 2022-02-27 20:47
kubed | v0.13.2 | v1 | 2022-02-25 01:48
kubernetes-dashboard | 5.2.0 | v2 | 2022-02-05 04:26
linkerd2 | 2.10.2 | v1 | 2022-03-01 23:05
linkerd2-cni | 2.10.2 | v1 | 2022-03-01 23:05
loki | 2.10.1 | v1 | 2022-02-19 10:39
loki-distributed | 0.44.0 | v2 | 2022-02-18 17:04
longhorn | 1.2.3 | v1 | 2022-03-01 23:05
meshery | v0.6.1 | v2 | 2022-01-01 06:58
metallb | 2.6.2 | v2 | 2022-01-22 03:31
minio | 8.0.10 | v1 | 2022-03-01 23:05
minio-console | 1.0.3 | v2 | 2022-03-01 23:05
minio-operator | 4.3.7 | v2 | 2022-02-25 07:49
minio-standalone | 1.0.2 | v2 | 2022-03-01 23:05
nats | 0.13.2 | v2 | 2022-03-02 00:59
nfs-subdir-external-provisioner | 4.0.16 | v1 | 2022-02-10 11:58
oauth2-proxy | 1.0.2 | v2 | 2022-03-01 23:05
openebs | 3.1.0 | v2 | 2022-01-17 17:16
postgres-operator | 1.7.1 | v1 | 2022-03-01 23:05
postgres-operator-ui | 1.7.1 | v1 | 2022-03-01 23:05
prometheus-blackbox-exporter | 5.4.1 | v2 | 2022-02-25 16:19
prometheus-mysql-exporter | 1.6.0 | v1 | 2022-02-14 22:57
prometheus-postgres-exporter | 2.5.0 | v2 | 2022-01-18 22:25
prometheus-redis-exporter | 4.6.0 | v2 | 2021-09-10 09:57
prometheus-snmp-exporter | 0.2.0 | v1 | 2022-02-01 04:22
prometheus-statsd-exporter | 0.4.2 | v2 | 2021-11-15 19:42
prometheus-target | 1.0.0 | v2 | 2022-03-01 23:05
rancher | 2.6.3 | v1 | 2021-12-22 06:09
redis | 16.4.5 | v2 | 2022-03-02 00:59
reflector | 6.1.23 | v2 | 2022-01-09 22:50
reloader | v0.0.108 | v1 | 2022-02-28 02:58
samba | 1.0.0 | v2 | 2022-03-01 23:05
sealed-secrets | 2.1.3 | v2 | 2022-02-17 19:25
seaweedfs | 2.92 | v1 | 2022-03-01 23:05
temporal | 0.15.1 | v2 | 2022-03-01 23:05
traefik | 9.1.1 | v2 | 2020-09-04 22:51
vault | 0.19.0 | v2 | 2022-01-21 08:26
verdaccio | 4.6.2 | v2 | 2022-02-15 04:40
victoria-metrics-operator | 0.8.0 | v1 | 2022-02-23 04:36
wiki | 2.2.0 | v2 | 2022-03-01 23:05
yugabyte | 2.12.1 | v1 | 2022-02-23 04:09

## haproxytech

Name | Version | App Version | Created
-----|---------|-------------|--------
haproxy | 1.11.0 | v2 | 2022-03-02 00:59
kubernetes-ingress | 1.19.0 | v2 | 2022-03-02 00:59

## banzai

Name | Version | App Version | Created
-----|---------|-------------|--------
cadence | 0.23.0 | v1 | 2021-12-03 21:20

## wener

Name | Version | App Version | Created
-----|---------|-------------|--------
filebrowser | 1.0.0 | v2 | 2021-06-05 20:09
frpc | 1.0.1 | v2 | 2021-11-19 01:24
frps | 1.0.1 | v2 | 2021-11-19 01:24
ingresses | 1.0.0 | v2 | 2021-06-05 20:09
keycloak | 16.1.0 | v2 | 2021-12-27 16:45
minio-console | 1.0.3 | v2 | 2022-01-06 22:14
minio-standalone | 1.0.2 | v2 | 2022-01-06 22:14
oauth2-proxy | 1.0.2 | v2 | 2022-01-06 22:14
prometheus-target | 1.0.0 | v2 | 2021-06-05 20:09
samba | 1.0.0 | v2 | 2021-06-05 20:09

<!-- END MANIFEST -->
