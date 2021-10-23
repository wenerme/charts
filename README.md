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
# Only clone charts
git clone --depth=1 --single-branch --branch gh-pages https://github.com/wenerme/charts charts
```
## Charts

| Name | Version | AppVersion |
|------|---------|------------|
| alpine | 1.0.0 | 3.12.0 |
| ambassador | 6.9.3 | 1.14.2 |
| argo-cd | 3.26.3 | v2.1.5 |
| argo-workflows | 0.8.0 | v3.2.0 |
| argo | 1.0.0 | v2.12.5 |
| argocd-applicationset | 1.6.0 | v0.2.0 |
| argocd-notifications | 1.5.1 | 1.1.1 |
| athens-proxy | 0.5.0 | 0.11.0 |
| cert-manager | v1.5.4 | v1.5.4 |
| cockroachdb | 6.2.5 | 21.1.11 |
| consul | 0.35.0 | 1.10.3 |
| dapr | 1.4.3 | 1.4.3 |
| gitea | 4.1.1 | 1.15.3 |
| gitlab-runner | 0.33.1 | 14.3.2 |
| gitlab | 5.4.0 | 14.4.0 |
| grafana | 6.17.3 | 8.2.1 |
| haproxy-ingress | 0.0.27 | 0.7.2 |
| harbor | 1.7.3 | 2.3.3 |
| hazelcast | 5.1.0 | 5.0 |
| ingress-nginx | 4.0.6 | 1.0.4 |
| kube-prometheus | 6.1.14 | 0.51.2 |
| kubed | v0.12.0 | v0.12.0 |
| kubernetes-dashboard | 5.0.3 | 2.4.0 |
| linkerd2-cni | 2.10.2 | stable-2.10.2 |
| linkerd2 | 2.10.2 | stable-2.10.2 |
| loki-distributed | 0.38.1 | 2.3.0 |
| loki | 2.6.0 | v2.3.0 |
| longhorn | 1.2.2 | v1.2.2 |
| meshery | v0.5.67 | v0.6.0 |
| metallb | 2.5.7 | 0.10.3 |
| minio-operator | 4.3.2 | v4.3.2 |
| minio | 8.0.10 | master |
| nats | 0.9.0 | 2.6.1 |
| nfs-subdir-external-provisioner | 4.0.14 | 4.0.2 |
| openebs | 3.0.2 | 3.0.1 |
| postgres-operator-ui | 1.7.0 | 1.7.0 |
| postgres-operator | 1.7.0 | 1.7.0 |
| prometheus-blackbox-exporter | 5.2.0 | 0.19.0 |
| prometheus-mysql-exporter | 1.2.2 | v0.12.1 |
| prometheus-postgres-exporter | 2.3.7 | 0.10.0 |
| prometheus-redis-exporter | 4.6.0 | 1.27.0 |
| prometheus-snmp-exporter | 0.1.5 | 0.19.0 |
| prometheus-statsd-exporter | 0.4.1 | 0.22.1 |
| rancher | 2.6.2 | v2.6.2 |
| redis | 15.5.1 | 6.2.6 |
| reflector | 6.0.19 | 6.0.19 |
| reloader | v0.0.102 | v0.0.102 |
| sealed-secrets | 1.16.1 | v0.16.0 |
| seaweedfs | 2.74 | 2.74 |
| traefik | 9.1.1 | 2.2.8 |
| vault | 0.17.0 | 1.8.4 |
| verdaccio | 4.4.0 | 5.1.1 |
| victoria-metrics-operator | 0.3.1 | 0.19.1 |
| wiki | 2.2.0 |  |
| yugabyte | 2.9.0 | 2.9.0.0-b4 |

## wener/charts

| Name | Version | AppVersion |
|------|---------|------------|
| filebrowser | 1.0.0 | v2.13.0 |
| frpc | 1.0.0 |  |
| frps | 1.0.0 |  |
| ingresses | 1.0.0 |  |
| keycloak | 15.0.2 | 15.0.1 |
| minio-console | 1.0.2 | v0.7.1 |
| minio-standalone | 1.0.1 | RELEASE.2021-04-06T23-11-00Z.hotfix.f3cd60697 |
| oauth2-proxy | 1.0.1 | v7.1.3 |
| prometheus-target | 1.0.0 |  |
| samba | 1.0.0 | 4.13.3 |
