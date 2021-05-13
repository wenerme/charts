# Helm Charts

Collection of offcial charts.

```bash
# 阿里云 CDN
helm repo add wener https://charts.wener.tech
helm search repo wener/

# Github Pages
helm repo add wener https://wenerme.github.io/charts
helm search repo wener/
```

__[Demo YAML manifets for test](https://github.com/wenerme/charts/tree/master/public/s)__

```bash
kubectl apply -f https://charts.wener.tech/s/whoami.deploy.yaml
kubectl apply -f https://charts.wener.tech/s/whoami.svc.yaml
kubectl apply -f https://charts.wener.tech/s/whoami.ingress.yaml
```

## 镜像 Charts
### 动机
* Helm 官方 charts 已经在停止维护阶段，目前要求应用方自行维护和提供 REPO
* 通常官方 Chart 都在一个独立仓库，独立仓库通常只包含一个 Chart
* 仓库多了过后导致 `helm repo update` 非常慢
* 仓库多了过后查找 Chart 也困难
* 有些仓库被 GFW 拦截 - 镜像后易于访问

> [helm/stable 状态 ](https://github.com/helm/charts#status-of-the-project)
>
> 目前正在弃用，于 2020.11.13 停止维护，charts 由应用方自行维护。

### CI
* 基于 GitHub Action 自动拉取 Chart
* 基于 GitHub 定时 30分钟 更新一次

---

## Mirror charts
### WHY
* Helm stable charts repo will stop maintain on Nov 13, 2020.
* Official repo only contain one chart - hard to find
* Too many repos cause `helm repo update` slow
* GFW Friendly

> [Status of helm stable charts](https://github.com/helm/charts#status-of-the-project)
>
> Helm stable repo is deprecating, will stop maintain on Nov 13, 2020. 

## HOW
* Auto package based on Github Action
* Sync every 30min

## DEV

```bash
# Only clone charts
git clone --depth=1 --single-branch --branch gh-pages https://github.com/wenerme/charts charts
```

## Charts
Name | Version | AppVersion
-----|---------|-----------
alpine | 1.0.0 | 3.12.0
ambassador | 6.7.7 | 1.13.4
argo-cd | 3.2.4 | 2.0.0
argo | 0.16.10 | v2.12.5
cert-manager | v1.3.1 | v1.3.1
cockroachdb | 5.1.8 | 20.2.9
consul | 0.31.1 | 1.9.4
dapr | 1.1.2 | 1.1.2
gitea | 3.0.0 | 1.14.1
grafana | 6.9.0 | 7.5.5
haproxy-ingress | 0.0.27 | 0.7.2
harbor | 1.6.1 | 2.2.1
hazelcast | 3.7.2 | 4.2
ingress-nginx | 3.30.0 | 0.46.0
kube-prometheus | 5.0.0 | 0.47.1
kubed | v0.12.0 | v0.12.0
kubernetes-dashboard | 4.0.3 | 2.2.0
linkerd2-cni | 2.10.1 | stable-2.10.1
linkerd2 | 2.10.1 | stable-2.10.1
loki-distributed | 0.29.0 | 2.2.0
loki | 2.5.0 | v2.2.0
longhorn | 1.1.1 | v1.1.1
metallb | 2.3.6 | 0.9.6
minio | 8.0.10 | master
nats | 0.8.0 | 2.2.3
openebs | 2.8.1 | 2.8.0
postgres-operator-ui | 1.6.2 | 1.6.2
postgres-operator | 1.6.2 | 1.6.2
prometheus-blackbox-exporter | 4.11.0 | 0.18.0
prometheus-mysql-exporter | 1.2.0 | v0.12.1
prometheus-postgres-exporter | 2.3.1 | 0.9.0
prometheus-redis-exporter | 4.0.2 | 1.11.1
prometheus-snmp-exporter | 0.1.2 | 0.19.0
prometheus-statsd-exporter | 0.3.1 | 0.20.0
rancher | 2.5.8 | v2.5.8
redis | 14.1.1 | 6.2.3
reflector | 5.4.17 | 5.4.17
sealed-secrets | 1.16.1 | v0.16.0
seaweedfs | 2.47 | 2.47
traefik | 9.1.1 | 2.2.8
vault | 0.11.0 | 1.7.0
verdaccio | 4.0.0 | 5.0.1
wiki | 2.1.0 | 
yugabyte | 2.7.0 | 2.7.0.0-b17
