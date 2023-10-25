# Helm Charts

Collection of offcial charts.

- https://charts.wener.tech
- https://wenerme.github.io/charts
- oci://docker.io
- oci://quay.io

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
https://argoproj.github.io/argo-helm | 7
https://charts.bitnami.com/bitnami | 4
https://charts.apiseven.com | 3
https://grafana.github.io/helm-charts | 3
https://opensearch-project.github.io/helm-charts | 2
https://helm.releases.hashicorp.com | 2
https://nats-io.github.io/k8s/helm/charts | 2
https://victoriametrics.github.io/helm-charts | 2
https://charts.gitlab.io | 2
https://haproxytech.github.io/helm-charts | 2
https://kubernetes-charts.banzaicloud.com | 2
https://charts.external-secrets.io | 1
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
alertmanager | 1.7.0 | v0.26.0 | 2023-09-27 21:06
alpine | 1.0.0 | 3.12.0 | 2022-03-01 23:04
ambassador | 6.9.5 | 1.14.4 | 2022-06-14 06:04
apisix | 2.3.0 | 3.6.0 | 2023-10-13 17:33
apisix-dashboard | 0.8.1 | 3.0.0 | 2023-07-12 09:33
apisix-ingress-controller | 0.12.2 | 1.7.0 | 2023-09-28 16:34
argo | 1.0.0 | v2.12.5 | 2022-03-01 23:04
argo-cd | 5.46.8 | v2.8.4 | 2023-10-12 18:04
argo-events | 2.4.1 | v1.8.1 | 2023-09-04 09:25
argo-rollouts | 2.32.1 | v1.6.0 | 2023-10-24 20:41
argo-workflows | 0.37.0 | v3.5.0 | 2023-10-24 20:41
argocd-applicationset | 1.12.1 | v0.4.1 | 2022-05-07 00:44
argocd-image-updater | 0.9.1 | v0.12.2 | 2023-09-01 16:41
argocd-notifications | 1.8.1 | v1.2.1 | 2022-05-07 00:44
athens-proxy | 0.5.2 | 0.11.1 | 2022-05-07 00:44
cadence | 0.23.0 | 0.23.2 | 2022-03-01 23:05
cert-manager | v1.13.1 | v1.13.1 | 2023-09-27 16:34
cockroachdb | 11.2.1 | 23.1.11 | 2023-10-03 03:33
consul | 1.2.2 | 1.16.2 | 2023-09-22 00:05
dapr | 1.12.0 | 1.12.0 | 2023-10-12 09:24
emissary-ingress | 8.8.2 | 3.8.2 | 2023-10-11 22:35
etcd | 9.5.6 | 3.5.9 | 2023-10-12 23:33
external-secrets | 0.9.7 | v0.9.7 | 2023-10-22 22:04
filebrowser | 1.0.0 | v2.13.0 | 2022-03-01 23:05
frpc | 1.0.1 | v0.37.0 | 2022-03-01 23:05
frps | 1.0.1 | v0.37.0 | 2022-03-01 23:05
gitea | 9.5.1 | 1.20.5 | 2023-10-18 01:33
gitlab | 7.5.0 | v16.5.0 | 2023-10-22 21:34
gitlab-runner | 0.58.1 | 16.5.0 | 2023-10-25 01:33
grafana | 6.61.1 | 10.1.5 | 2023-10-19 01:05
haproxy-ingress | 0.14.5 | v0.14.5 | 2023-09-01 20:05
harbor | 1.13.0 | 2.9.0 | 2023-08-30 15:04
hazelcast | 5.8.9 | 5.3.2 | 2023-10-19 18:05
ingress-nginx | 4.8.2 | 1.9.3 | 2023-10-12 22:34
ingresses | 1.0.0 |  | 2022-03-01 23:05
keycloak | 16.1.0 | 16.1.0 | 2022-03-01 23:05
kube-prometheus | 8.21.6 | 0.68.0 | 2023-10-16 18:34
kube-prometheus-stack | 52.0.0 | v0.68.0 | 2023-10-25 16:34
kube-state-metrics | 5.14.0 | 2.10.0 | 2023-10-05 03:04
kubed | v0.13.2 | v0.13.2 | 2022-02-25 01:48
kubernetes-dashboard | 7.0.3 | v3.0.0-alpha0 | 2023-07-21 18:05
linkerd2 | 2.10.2 | stable-2.10.2 | 2022-03-01 23:05
linkerd2-cni | 2.10.2 | stable-2.10.2 | 2022-03-01 23:05
logging-operator | 3.17.10 | 3.17.10 | 2022-11-28 21:38
loki | 5.35.0 | 2.9.2 | 2023-10-19 17:05
loki-distributed | 0.76.0 | 2.9.2 | 2023-10-18 05:05
longhorn | 1.2.3 | v1.2.3 | 2022-03-01 23:05
meshery | v0.6.163 | v0.6.163 | 2023-10-24 15:05
metallb | 4.7.11 | 0.13.12 | 2023-10-21 02:33
minio | 8.0.10 | master | 2022-03-01 23:05
minio-console | 1.0.3 | v0.13.2 | 2022-03-01 23:05
minio-operator | 4.3.7 | v4.3.7 | 2022-02-25 07:49
minio-standalone | 1.0.2 | RELEASE.2022-01-04T07-41-07Z | 2022-03-01 23:05
nats | 1.1.2 | 2.10.3 | 2023-10-17 08:14
nats-account-server | 0.8.0 | 1.0.0 | 2022-03-13 01:04
nfs-subdir-external-provisioner | 4.0.18 | 4.0.2 | 2023-03-14 04:33
oauth2-proxy | 1.0.2 | v7.2.1 | 2022-03-01 23:05
openebs | 3.9.0 | 3.9.0 | 2023-09-06 14:34
opensearch | 2.16.1 | 2.11.0 | 2023-10-24 00:04
opensearch-dashboards | 2.14.0 | 2.11.0 | 2023-10-17 04:33
postgres-operator | 1.7.1 | 1.7.1 | 2022-03-01 23:05
postgres-operator-ui | 1.7.1 | 1.7.1 | 2022-03-01 23:05
prometheus | 25.3.0 | v2.47.0 | 2023-10-25 01:04
prometheus-blackbox-exporter | 8.4.0 | v0.24.0 | 2023-09-27 19:04
prometheus-mysql-exporter | 2.1.0 | v0.15.0 | 2023-10-13 22:04
prometheus-nats-exporter | 2.13.0 | 0.12.0 | 2023-07-21 16:05
prometheus-node-exporter | 4.23.2 | 1.6.1 | 2023-10-01 00:05
prometheus-postgres-exporter | 5.1.0 | v0.14.0 | 2023-09-28 08:48
prometheus-pushgateway | 2.4.1 | v1.6.1 | 2023-09-12 18:34
prometheus-redis-exporter | 6.0.1 | v1.55.0 | 2023-10-17 22:33
prometheus-snmp-exporter | 1.8.1 | v0.21.0 | 2023-10-04 04:34
prometheus-statsd-exporter | 0.10.1 | v0.24.0 | 2023-09-23 16:04
prometheus-target | 1.0.0 |  | 2022-03-01 23:05
rancher | 2.7.6 | v2.7.6 | 2023-08-31 04:35
redis | 18.1.6 | 7.2.2 | 2023-10-19 23:33
reflector | 7.1.216 | 7.1.216 | 2023-10-18 15:04
reloader | 1.0.48 | v1.0.48 | 2023-10-25 20:41
samba | 1.0.0 | 4.13.3 | 2022-03-01 23:05
sealed-secrets | 2.13.1 | v0.24.2 | 2023-10-16 18:34
seaweedfs | 2.92 | 2.92 | 2022-03-01 23:05
temporal | 0.15.1 | 1.15.1 | 2022-03-01 23:05
traefik | 9.1.1 | 2.2.8 | 2020-09-04 22:51
vault | 0.25.0 | 1.14.0 | 2023-06-26 23:34
vector | 0.26.0 | 0.33.0-distroless-libc | 2023-09-28 01:33
verdaccio | 4.12.0 | 5.21.1 | 2023-05-30 19:04
victoria-metrics-k8s-stack | 0.18.5 | v1.94.0 | 2023-10-09 02:33
victoria-metrics-operator | 0.27.3 | 0.39.0 | 2023-10-09 02:04
wiki | 2.2.0 | latest | 2022-03-01 23:05
yugabyte | 2.19.2+0 | 2.19.2.0-b121 | 2023-10-25 13:05

## haproxytech

Name | Version | App Version | Created
-----|---------|-------------|--------
haproxy | 1.19.3 | 2.8.2 | 2023-08-24 01:04
kubernetes-ingress | 1.33.1 | 1.10.8 | 2023-09-29 19:04

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
