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
ambassador | 6.5.19 | 1.11.1
argo-cd | 2.14.7 | 1.8.4
argo | 0.16.5 | v2.12.5
cert-manager | v1.2.0 | v1.2.0
cockroachdb | 5.0.5 | 20.2.5
consul | 0.30.0 | 1.9.3
dapr | 1.0.0 | 1.0.0
gitea | 2.1.11 | 1.13.2
haproxy-ingress | 0.0.27 | 0.7.2
harbor | 1.5.3 | 2.1.3
hazelcast | 3.6.0 | 4.1.1
ingress-nginx | 3.23.0 | 0.44.0
kube-prometheus | 4.1.1 | 0.46.0
kubernetes-dashboard | 4.0.2 | 2.2.0
linkerd2-cni | 2.9.4 | stable-2.9.4
linkerd2 | 2.9.4 | stable-2.9.4
longhorn | 1.1.0 | v1.1.0
metallb | 2.3.2 | 0.9.5
minio | 8.0.10 | master
openebs | 2.6.0 | 2.6.0
prometheus-blackbox-exporter | 4.10.2 | 0.18.0
prometheus-mysql-exporter | 1.1.0 | v0.12.1
prometheus-postgres-exporter | 1.10.0 | 0.8.0
prometheus-redis-exporter | 4.0.0 | 1.11.1
prometheus-snmp-exporter | 0.1.2 | 0.19.0
rancher | 2.5.5 | v2.5.5
redis | 12.7.7 | 6.0.11
sealed-secrets | 1.13.2 | 0.13.1
seaweedfs | 2.28 | 2.28
traefik | 9.1.1 | 2.2.8
vault | 0.9.1 | 1.6.2
wiki | 2.1.0 | 
yugabyte | 2.5.2 | 2.5.2.0-b104
