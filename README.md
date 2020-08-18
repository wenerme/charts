# Helm Charts

```bash
helm repo add wener https://wenerme.github.io/charts
helm search repo wener/
```

## 镜像 Charts
### 动机
* 通常官方 Chart 都在一个独立仓库，独立仓库通常只包含一个 Chart
* 仓库多了过后导致 `helm repo update` 非常慢
* 仓库多了过后查找 Chart 也困难
* 有些仓库被 GFW 拦截 - 镜像后易于访问

### CI
* 基于 GitHub Action 自动拉取 Chart
* 基于 GitHub 定时 30分钟 更新一次

---

## Mirror charts
### WHY
* Official repo only contain one chart - hard to find
* Too many repos cause `helm repo update` slow
* GFW Friendly

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
cert-manager | v0.16.1 | v0.16.1
consul | 0.24.1 | 1.8.2
haproxy-ingress | 0.0.27 | 0.7.2
ingress-nginx | 2.11.2 | 0.34.1
kubernetes-dashboard | 2.3.0 | 2.0.3
longhorn | 1.0.0 | v1.0.0
redis | 10.7.16 | 6.0.6
traefik | 8.13.0 | 2.2.8
vault | 0.6.0 | 1.4.2
