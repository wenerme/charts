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
https://charts.bitnami.com/bitnami | 4
https://argoproj.github.io/argo-helm | 4
https://charts.apiseven.com | 3
https://grafana.github.io/helm-charts | 3
https://opensearch-project.github.io/helm-charts | 2
https://helm.releases.hashicorp.com | 2
https://nats-io.github.io/k8s/helm/charts | 2
https://victoriametrics.github.io/helm-charts | 2
https://charts.gitlab.io | 2
https://haproxytech.github.io/helm-charts | 2
https://kubernetes-charts.banzaicloud.com | 2
https://helm.vector.dev | 1
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
alertmanager | 0.33.1 | v0.25.0 | 2023-06-15 16:33
alpine | 1.0.0 | 3.12.0 | 2022-03-01 23:04
ambassador | 6.9.5 | 1.14.4 | 2022-06-14 06:04
apisix | 2.1.0 | 3.4.0 | 2023-07-10 15:33
apisix-dashboard | 0.8.0 | 3.0.0 | 2023-06-14 17:12
apisix-ingress-controller | 0.11.7 | 1.6.1 | 2023-07-05 12:04
argo | 1.0.0 | v2.12.5 | 2022-03-01 23:04
argo-cd | 5.38.1 | v2.7.7 | 2023-07-11 21:09
argo-workflows | 0.31.0 | v3.4.8 | 2023-07-11 20:44
argocd-applicationset | 1.12.1 | v0.4.1 | 2022-05-07 00:44
argocd-notifications | 1.8.1 | v1.2.1 | 2022-05-07 00:44
athens-proxy | 0.5.2 | 0.11.1 | 2022-05-07 00:44
cadence | 0.23.0 | 0.23.2 | 2022-03-01 23:05
cert-manager | v1.12.2 | v1.12.2 | 2023-06-16 21:05
cockroachdb | 11.0.4 | 23.1.5 | 2023-07-06 23:04
consul | 1.2.0 | 1.16.0 | 2023-06-30 04:04
dapr | 1.11.1 | 1.11.1 | 2023-06-22 22:04
emissary-ingress | 8.7.0 | 3.7.0 | 2023-06-21 01:04
etcd | 9.0.4 | 3.5.9 | 2023-07-01 05:33
filebrowser | 1.0.0 | v2.13.0 | 2022-03-01 23:05
frpc | 1.0.1 | v0.37.0 | 2022-03-01 23:05
frps | 1.0.1 | v0.37.0 | 2022-03-01 23:05
gitea | 8.3.0 | 1.19.3 | 2023-05-04 14:34
gitlab | 7.1.2 | v16.1.2 | 2023-07-05 19:04
gitlab-runner | 0.54.0 | 16.1.0 | 2023-06-22 08:15
grafana | 6.58.2 | 10.0.1 | 2023-07-11 16:05
haproxy-ingress | 0.14.4 | v0.14.4 | 2023-07-07 21:09
harbor | 1.12.2 | 2.8.2 | 2023-06-06 18:33
hazelcast | 5.8.0 | 5.3.1 | 2023-06-13 17:05
ingress-nginx | 4.7.1 | 1.8.1 | 2023-07-01 06:04
ingresses | 1.0.0 |  | 2022-03-01 23:05
keycloak | 16.1.0 | 16.1.0 | 2022-03-01 23:05
kube-prometheus | 8.15.1 | 0.66.0 | 2023-07-06 05:34
kube-prometheus-stack | 47.6.1 | v0.66.0 | 2023-07-11 20:06
kube-state-metrics | 5.8.2 | 2.9.2 | 2023-07-08 15:33
kubed | v0.13.2 | v0.13.2 | 2022-02-25 01:48
kubernetes-dashboard | 7.0.2 | v3.0.0-alpha0 | 2023-07-09 02:04
linkerd2 | 2.10.2 | stable-2.10.2 | 2022-03-01 23:05
linkerd2-cni | 2.10.2 | stable-2.10.2 | 2022-03-01 23:05
logging-operator | 3.17.10 | 3.17.10 | 2022-11-28 21:38
loki | 5.8.9 | 2.8.2 | 2023-07-05 17:34
loki-distributed | 0.69.16 | 2.8.2 | 2023-05-12 07:04
longhorn | 1.2.3 | v1.2.3 | 2022-03-01 23:05
meshery | v0.6.106 | v0.6.106 | 2023-07-08 09:33
metallb | 4.5.5 | 0.13.10 | 2023-07-01 01:33
minio | 8.0.10 | master | 2022-03-01 23:05
minio-console | 1.0.3 | v0.13.2 | 2022-03-01 23:05
minio-operator | 4.3.7 | v4.3.7 | 2022-02-25 07:49
minio-standalone | 1.0.2 | RELEASE.2022-01-04T07-41-07Z | 2022-03-01 23:05
nats | 0.19.16 | 2.9.19 | 2023-06-23 06:05
nats-account-server | 0.8.0 | 1.0.0 | 2022-03-13 01:04
nfs-subdir-external-provisioner | 4.0.18 | 4.0.2 | 2023-03-14 04:33
oauth2-proxy | 1.0.2 | v7.2.1 | 2022-03-01 23:05
openebs | 3.7.0 | 3.7.0 | 2023-05-29 20:05
opensearch | 2.13.3 | 2.8.0 | 2023-06-22 01:04
opensearch-dashboards | 2.11.1 | 2.8.0 | 2023-06-13 22:04
postgres-operator | 1.7.1 | 1.7.1 | 2022-03-01 23:05
postgres-operator-ui | 1.7.1 | 1.7.1 | 2022-03-01 23:05
prometheus | 23.1.0 | v2.45.0 | 2023-07-11 16:36
prometheus-blackbox-exporter | 8.1.0 | v0.24.0 | 2023-07-11 23:33
prometheus-mysql-exporter | 1.14.0 | v0.14.0 | 2023-04-26 19:33
prometheus-nats-exporter | 2.12.0 | 0.11.0 | 2023-04-29 01:05
prometheus-node-exporter | 4.18.1 | 1.6.0 | 2023-06-23 01:33
prometheus-postgres-exporter | 4.7.0 | 0.13.1 | 2023-07-10 20:45
prometheus-pushgateway | 2.4.0 | v1.6.0 | 2023-07-08 20:05
prometheus-redis-exporter | 5.3.2 | v1.44.0 | 2023-04-13 16:04
prometheus-snmp-exporter | 1.6.0 | v0.21.0 | 2023-07-11 16:05
prometheus-statsd-exporter | 0.8.0 | v0.22.8 | 2023-03-23 20:43
prometheus-target | 1.0.0 |  | 2022-03-01 23:05
rancher | 2.7.5 | v2.7.5 | 2023-06-30 02:38
redis | 17.11.8 | 7.0.12 | 2023-07-11 10:29
reflector | 7.0.190 | 7.0.190 | 2023-07-06 18:05
reloader | 1.0.29 | v1.0.29 | 2023-06-27 23:05
samba | 1.0.0 | 4.13.3 | 2022-03-01 23:05
sealed-secrets | 2.10.0 | v0.22.0 | 2023-06-15 20:05
seaweedfs | 2.92 | 2.92 | 2022-03-01 23:05
temporal | 0.15.1 | 1.15.1 | 2022-03-01 23:05
traefik | 9.1.1 | 2.2.8 | 2020-09-04 22:51
vault | 0.25.0 | 1.14.0 | 2023-06-26 23:34
vector | 0.23.0 | 0.31.0-distroless-libc | 2023-07-07 02:35
verdaccio | 4.12.0 | 5.21.1 | 2023-05-30 19:04
victoria-metrics-k8s-stack | 0.17.0 | v1.91.3 | 2023-07-03 16:05
victoria-metrics-operator | 0.24.0 | 0.35.0 | 2023-07-03 11:37
wiki | 2.2.0 | latest | 2022-03-01 23:05
yugabyte | 2.19.0 | 2.19.0.0-b190 | 2023-06-17 06:04

## haproxytech

Name | Version | App Version | Created
-----|---------|-------------|--------
haproxy | 1.19.1 | 2.8.0 | 2023-06-21 17:35
kubernetes-ingress | 1.32.0 | 1.10.4 | 2023-07-01 06:34

## banzai

Name | Version | App Version | Created
-----|---------|-------------|--------
cadence | 0.24.2 | 0.24.0 | 2023-04-24 05:04
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
