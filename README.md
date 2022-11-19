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
alertmanager | 0.22.0 | v0.24.0 | 2022-11-04 16:41
alpine | 1.0.0 | 3.12.0 | 2022-03-01 23:04
ambassador | 6.9.5 | 1.14.4 | 2022-06-14 06:04
argo | 1.0.0 | v2.12.5 | 2022-03-01 23:04
argo-cd | 5.13.9 | v2.5.2 | 2022-11-17 23:36
argo-workflows | 0.20.8 | v3.4.3 | 2022-11-14 19:34
argocd-applicationset | 1.12.1 | v0.4.1 | 2022-05-07 00:44
argocd-notifications | 1.8.1 | v1.2.1 | 2022-05-07 00:44
athens-proxy | 0.5.2 | 0.11.1 | 2022-05-07 00:44
cadence | 0.23.0 | 0.23.2 | 2022-03-01 23:05
cert-manager | v1.10.0 | v1.10.0 | 2022-10-17 21:22
cockroachdb | 9.1.1 | 22.1.11 | 2022-11-16 08:48
consul | 1.0.0 | 1.14.0 | 2022-11-18 06:04
dapr | 1.9.4 | 1.9.4 | 2022-11-18 07:04
emissary-ingress | 8.3.0 | 3.3.0 | 2022-11-02 21:47
filebrowser | 1.0.0 | v2.13.0 | 2022-03-01 23:05
frpc | 1.0.1 | v0.37.0 | 2022-03-01 23:05
frps | 1.0.1 | v0.37.0 | 2022-03-01 23:05
gitea | 6.0.3 | 1.17.3 | 2022-10-21 01:46
gitlab | 6.5.5 | 15.5.4 | 2022-11-14 14:39
gitlab-runner | 0.46.1 | 15.5.1 | 2022-11-11 23:37
grafana | 6.44.5 | 9.2.5 | 2022-11-19 09:32
haproxy-ingress | 0.13.9 | v0.13.9 | 2022-08-07 20:05
harbor | 1.10.2 | 2.6.2 | 2022-11-10 18:04
hazelcast | 5.5.0 | 5.2.0 | 2022-10-31 18:04
ingress-nginx | 4.4.0 | 1.5.1 | 2022-11-10 09:33
ingresses | 1.0.0 |  | 2022-03-01 23:05
keycloak | 16.1.0 | 16.1.0 | 2022-03-01 23:05
kube-prometheus | 8.2.0 | 0.60.1 | 2022-11-18 19:33
kube-prometheus-stack | 41.9.1 | 0.60.1 | 2022-11-19 19:33
kube-state-metrics | 4.23.0 | 2.6.0 | 2022-11-11 04:04
kubed | v0.13.2 | v0.13.2 | 2022-02-25 01:48
kubernetes-dashboard | 6.0.0 | 2.7.0 | 2022-11-15 00:04
linkerd2 | 2.10.2 | stable-2.10.2 | 2022-03-01 23:05
linkerd2-cni | 2.10.2 | stable-2.10.2 | 2022-03-01 23:05
logging-operator | 3.17.9 | 3.17.9 | 2022-09-01 21:16
loki | 3.3.4 | 2.6.1 | 2022-11-10 22:12
loki-distributed | 0.65.1 | 2.6.1 | 2022-11-16 15:04
longhorn | 1.2.3 | v1.2.3 | 2022-03-01 23:05
meshery | v0.6.28 | v0.6.28 | 2022-11-17 04:35
metallb | 4.1.12 | 0.13.7 | 2022-11-17 16:04
minio | 8.0.10 | master | 2022-03-01 23:05
minio-console | 1.0.3 | v0.13.2 | 2022-03-01 23:05
minio-operator | 4.3.7 | v4.3.7 | 2022-02-25 07:49
minio-standalone | 1.0.2 | RELEASE.2022-01-04T07-41-07Z | 2022-03-01 23:05
nats | 0.18.2 | 2.9.3 | 2022-10-24 21:49
nats-account-server | 0.8.0 | 1.0.0 | 2022-03-13 01:04
nfs-subdir-external-provisioner | 4.0.17 | 4.0.2 | 2022-08-04 04:35
oauth2-proxy | 1.0.2 | v7.2.1 | 2022-03-01 23:05
openebs | 3.3.1 | 3.3.0 | 2022-09-02 21:44
opensearch | 2.8.0 | 2.4.0 | 2022-11-16 07:35
opensearch-dashboards | 2.6.0 | 2.4.0 | 2022-11-16 07:35
postgres-operator | 1.7.1 | 1.7.1 | 2022-03-01 23:05
postgres-operator-ui | 1.7.1 | 1.7.1 | 2022-03-01 23:05
prometheus | 16.0.0 | 2.39.1 | 2022-11-19 09:32
prometheus-blackbox-exporter | 7.1.3 | 0.22.0 | 2022-10-26 17:04
prometheus-mysql-exporter | 1.10.0 | v0.14.0 | 2022-11-09 06:36
prometheus-nats-exporter | 2.10.1 | 0.10.1 | 2022-11-17 21:14
prometheus-node-exporter | 4.6.0 | 1.3.1 | 2022-11-18 07:35
prometheus-postgres-exporter | 3.1.5 | 0.10.1 | 2022-10-21 06:04
prometheus-pushgateway | 1.20.1 | 1.4.2 | 2022-10-20 00:07
prometheus-redis-exporter | 5.3.0 | v1.44.0 | 2022-11-09 07:04
prometheus-snmp-exporter | 1.2.1 | 0.19.0 | 2022-09-03 15:34
prometheus-statsd-exporter | 0.7.0 | v0.22.8 | 2022-11-08 05:35
prometheus-target | 1.0.0 |  | 2022-03-01 23:05
rancher | 2.6.9 | v2.6.9 | 2022-10-19 05:38
redis | 17.3.11 | 7.0.5 | 2022-11-15 17:34
reflector | 6.1.47 | 6.1.47 | 2022-03-21 16:37
reloader | v0.0.124 | v0.0.124 | 2022-10-10 19:04
samba | 1.0.0 | 4.13.3 | 2022-03-01 23:05
sealed-secrets | 2.7.1 | v0.19.2 | 2022-11-19 00:40
seaweedfs | 2.92 | 2.92 | 2022-03-01 23:05
temporal | 0.15.1 | 1.15.1 | 2022-03-01 23:05
traefik | 9.1.1 | 2.2.8 | 2020-09-04 22:51
vault | 0.22.1 | 1.12.0 | 2022-10-27 19:04
verdaccio | 4.9.2 | 5.15.4 | 2022-10-01 00:07
victoria-metrics-k8s-stack | 0.12.12 | 1.83.1 | 2022-11-17 10:36
victoria-metrics-operator | 0.16.1 | 0.29.2 | 2022-11-17 10:36
wiki | 2.2.0 | latest | 2022-03-01 23:05
yugabyte | 2.15.3 | 2.15.3.0-b231 | 2022-10-28 05:04

## haproxytech

Name | Version | App Version | Created
-----|---------|-------------|--------
haproxy | 1.17.3 | 2.6.6 | 2022-10-13 06:39
kubernetes-ingress | 1.24.0 | 1.9.0 | 2022-10-24 18:43

## banzai

Name | Version | App Version | Created
-----|---------|-------------|--------
cadence | 0.23.1 | 0.23.2 | 2022-08-17 20:05
vault | 1.16.0 | 1.16.0 | 2022-08-23 17:04

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
