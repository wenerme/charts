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
ambassador | 6.5.4 | 1.7.1
cert-manager | v1.0.1 | v1.0.1
cockroachdb | 4.1.6 | 20.1.5
consul | 0.24.1 | 1.8.2
haproxy-ingress | 0.0.27 | 0.7.2
harbor | 1.4.2 | 2.0.2
hazelcast | 3.4.9 | 4.0.2
ingress-nginx | 2.16.0 | 0.35.0
kube-prometheus | 1.1.0 | 0.41.1
kubernetes-dashboard | 2.6.0 | 2.0.3
linkerd2-cni | 2.8.1 | stable-2.8.1
linkerd2 | 2.8.1 | stable-2.8.1
longhorn | 1.0.2 | v1.0.2
metallb | 0.1.23 | 0.9.3
minio | 6.0.5 | master
redis | 10.8.2 | 6.0.8
seaweedfs | 2.02 | 
traefik | 9.1.1 | 2.2.8
vault | 0.7.0 | 1.5.2
yugabyte | 2.3.0 | 2.3.0.0-b176
