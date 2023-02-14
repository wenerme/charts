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
Repo | Charts
-----|-------
https://prometheus-community.github.io/helm-charts | 13
https://argoproj.github.io/argo-helm | 4
https://charts.bitnami.com/bitnami | 3
https://grafana.github.io/helm-charts | 3
https://opensearch-project.github.io/helm-charts | 2
https://helm.releases.hashicorp.com | 2
https://nats-io.github.io/k8s/helm/charts | 2
https://victoriametrics.github.io/helm-charts | 2
https://charts.gitlab.io | 2
https://haproxytech.github.io/helm-charts | 2
https://kubernetes-charts.banzaicloud.com | 2
https://kubernetes-charts.banzaicloud.com | 1
https://kubernetes.github.io/ingress-nginx | 1
https://charts.jetstack.io | 1
https://containous.github.io/traefik-helm-chart | 1
https://kubernetes.github.io/dashboard | 1
https://kubernetes-sigs.github.io/nfs-subdir-external-provisioner | 1
https://charts.appscode.com/stable | 1
https://emberstack.github.io/helm-charts | 1
https://charts.verdaccio.org | 1
https://bitnami-labs.github.io/sealed-secrets | 1
https://releases.rancher.com/server-charts/stable | 1
https://dapr.github.io/helm-charts | 1
https://dl.gitea.io/charts | 1
https://charts.cockroachdb.com | 1
https://hazelcast-charts.s3.amazonaws.com | 1
https://charts.yugabyte.com | 1
https://kubernetes.github.io/ingress-nginx | 1
https://haproxy-ingress.github.io/charts | 1
https://helm.goharbor.io | 1
https://www.getambassador.io | 1
https://app.getambassador.io | 1
https://operator.min.io | 1
https://meshery.io/charts | 1
https://openebs.github.io/charts | 1
https://stakater.github.io/stakater-charts | 1

## main

Name | Version | App Version | Created
-----|---------|-------------|--------
alertmanager | 0.25.0 | v0.25.0 | 2023-01-19 06:06
alpine | 1.0.0 | 3.12.0 | 2022-03-01 23:04
ambassador | 6.9.5 | 1.14.4 | 2022-06-14 06:04
argo | 1.0.0 | v2.12.5 | 2022-03-01 23:04
argo-cd | 5.20.4 | v2.6.1 | 2023-02-13 19:34
argo-workflows | 0.22.11 | v3.4.5 | 2023-02-10 13:33
argocd-applicationset | 1.12.1 | v0.4.1 | 2022-05-07 00:44
argocd-notifications | 1.8.1 | v1.2.1 | 2022-05-07 00:44
athens-proxy | 0.5.2 | 0.11.1 | 2022-05-07 00:44
cadence | 0.23.0 | 0.23.2 | 2022-03-01 23:05
cert-manager | v1.11.0 | v1.11.0 | 2023-01-19 06:06
cockroachdb | 10.0.4 | 22.2.4 | 2023-02-14 04:04
consul | 1.0.4 | 1.14.4 | 2023-02-08 07:04
dapr | 1.9.6 | 1.9.6 | 2023-02-04 02:35
emissary-ingress | 8.4.1 | 3.4.1 | 2023-02-08 06:33
filebrowser | 1.0.0 | v2.13.0 | 2022-03-01 23:05
frpc | 1.0.1 | v0.37.0 | 2022-03-01 23:05
frps | 1.0.1 | v0.37.0 | 2022-03-01 23:05
gitea | 7.0.2 | 1.18.3 | 2023-01-24 02:34
gitlab | 6.8.1 | 15.8.1 | 2023-01-31 20:44
gitlab-runner | 0.49.2 | 15.8.2 | 2023-02-10 22:04
grafana | 6.50.7 | 9.3.6 | 2023-02-03 10:29
haproxy-ingress | 0.14.1 | v0.14.1 | 2023-02-11 08:13
harbor | 1.11.0 | 2.7.0 | 2023-01-19 06:07
hazelcast | 5.7.1 | 5.2.1 | 2023-01-30 16:05
ingress-nginx | 4.5.0 | 1.6.3 | 2023-02-14 11:35
ingresses | 1.0.0 |  | 2022-03-01 23:05
keycloak | 16.1.0 | 16.1.0 | 2022-03-01 23:05
kube-prometheus | 8.3.5 | 0.63.0 | 2023-02-09 04:33
kube-prometheus-stack | 45.0.0 | v0.63.0 | 2023-02-09 19:33
kube-state-metrics | 4.30.0 | 2.8.0 | 2023-02-14 20:05
kubed | v0.13.2 | v0.13.2 | 2022-02-25 01:48
kubernetes-dashboard | 6.0.0 | 2.7.0 | 2022-11-15 00:04
linkerd2 | 2.10.2 | stable-2.10.2 | 2022-03-01 23:05
linkerd2-cni | 2.10.2 | stable-2.10.2 | 2022-03-01 23:05
logging-operator | 3.17.10 | 3.17.10 | 2022-11-28 21:38
loki | 4.6.1 | 2.7.3 | 2023-02-13 19:33
loki-distributed | 0.69.4 | 2.7.3 | 2023-02-03 20:05
longhorn | 1.2.3 | v1.2.3 | 2022-03-01 23:05
meshery | v0.6.51 | v0.6.51 | 2023-02-11 13:33
metallb | 4.1.14 | 0.13.7 | 2023-01-19 06:06
minio | 8.0.10 | master | 2022-03-01 23:05
minio-console | 1.0.3 | v0.13.2 | 2022-03-01 23:05
minio-operator | 4.3.7 | v4.3.7 | 2022-02-25 07:49
minio-standalone | 1.0.2 | RELEASE.2022-01-04T07-41-07Z | 2022-03-01 23:05
nats | 0.19.9 | 2.9.14-alpine | 2023-02-09 03:04
nats-account-server | 0.8.0 | 1.0.0 | 2022-03-13 01:04
nfs-subdir-external-provisioner | 4.0.17 | 4.0.2 | 2022-08-04 04:35
oauth2-proxy | 1.0.2 | v7.2.1 | 2022-03-01 23:05
openebs | 3.4.0 | 3.4.0 | 2023-02-10 07:34
opensearch | 2.10.0 | 2.5.0 | 2023-01-25 04:33
opensearch-dashboards | 2.8.0 | 2.5.0 | 2023-01-25 04:33
postgres-operator | 1.7.1 | 1.7.1 | 2022-03-01 23:05
postgres-operator-ui | 1.7.1 | 1.7.1 | 2022-03-01 23:05
prometheus | 19.4.0 | v2.41.0 | 2023-02-12 12:35
prometheus-blackbox-exporter | 7.5.0 | 0.23.0 | 2023-02-03 19:04
prometheus-mysql-exporter | 1.12.1 | v0.14.0 | 2023-01-19 06:06
prometheus-nats-exporter | 2.11.0 | 0.10.1 | 2023-02-07 16:35
prometheus-node-exporter | 4.13.0 | 1.5.0 | 2023-01-23 19:04
prometheus-postgres-exporter | 4.2.1 | 0.11.1 | 2023-01-26 17:04
prometheus-pushgateway | 2.1.2 | v1.5.1 | 2023-02-11 04:33
prometheus-redis-exporter | 5.3.0 | v1.44.0 | 2022-11-09 07:04
prometheus-snmp-exporter | 1.2.1 | 0.19.0 | 2022-09-03 15:34
prometheus-statsd-exporter | 0.7.0 | v0.22.8 | 2022-11-08 05:35
prometheus-target | 1.0.0 |  | 2022-03-01 23:05
rancher | 2.7.1 | v2.7.1 | 2023-01-25 11:33
redis | 17.7.3 | 7.0.8 | 2023-02-09 17:33
reflector | 6.1.47 | 6.1.47 | 2022-03-21 16:37
reloader | v1.0.5 | v1.0.5 | 2023-02-08 02:04
samba | 1.0.0 | 4.13.3 | 2022-03-01 23:05
sealed-secrets | 2.7.3 | v0.19.4 | 2023-01-19 06:07
seaweedfs | 2.92 | 2.92 | 2022-03-01 23:05
temporal | 0.15.1 | 1.15.1 | 2022-03-01 23:05
traefik | 9.1.1 | 2.2.8 | 2020-09-04 22:51
vault | 0.23.0 | 1.12.1 | 2022-11-29 08:15
verdaccio | 4.10.3 | 5.18.0 | 2022-11-24 16:04
victoria-metrics-k8s-stack | 0.14.8 | 1.87.1 | 2023-02-10 08:15
victoria-metrics-operator | 0.18.0 | 0.30.4 | 2023-01-27 22:33
wiki | 2.2.0 | latest | 2022-03-01 23:05
yugabyte | 2.17.1 | 2.17.1.0-b439 | 2023-02-08 01:04

## haproxytech

Name | Version | App Version | Created
-----|---------|-------------|--------
haproxy | 1.17.6 | 2.6.6 | 2023-02-06 19:33
kubernetes-ingress | 1.28.0 | 1.9.2 | 2023-02-11 05:04

## banzai

Name | Version | App Version | Created
-----|---------|-------------|--------
cadence | 0.24.1 | 0.24.0 | 2023-01-19 06:07
vault | 1.19.0 | 1.19.0 | 2023-02-11 03:33

## wener

Name | Version | App Version | Created
-----|---------|-------------|--------
filebrowser | 1.0.0 | v2.13.0 | 2021-06-05 20:09
frpc | 1.0.1 | v0.37.0 | 2021-11-19 01:24
frps | 1.0.1 | v0.37.0 | 2021-11-19 01:24
ingresses | 1.0.0 |  | 2021-06-05 20:09
keycloak | 16.1.0 | 16.1.0 | 2021-12-27 16:45
minio-console | 1.0.3 | v0.13.2 | 2022-01-06 22:14
minio-standalone | 1.0.2 | RELEASE.2022-01-04T07-41-07Z | 2022-01-06 22:14
oauth2-proxy | 1.0.2 | v7.2.1 | 2022-01-06 22:14
prometheus-target | 1.0.0 |  | 2021-06-05 20:09
samba | 1.0.0 | 4.13.3 | 2021-06-05 20:09

<!-- END MANIFEST -->
