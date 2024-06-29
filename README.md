# Helm Charts

Collection of offcial charts.

- https://charts.wener.tech
- https://wenerme.github.io/charts
- oci://docker.io
  - https://hub.docker.com/u/wcharts
- oci://quay.io
  - https://quay.io/organization/wcharts

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
https://apache.github.io/superset | 1
https://juicedata.github.io/charts/ | 1
https://charts.external-secrets.io | 1
https://helm.vector.dev | 1
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
https://stakater.github.io/stakater-charts | 1

## main

Name | Version | App Version | Created
-----|---------|-------------|--------
alertmanager | 1.11.0 | v0.27.0 | 2024-05-08 18:04
alpine | 1.0.0 | 3.12.0 | 2022-03-01 23:04
ambassador | 6.9.5 | 1.14.4 | 2022-06-14 06:04
apisix | 2.8.0 | 3.9.1 | 2024-06-04 18:04
apisix-dashboard | 0.8.2 | 3.0.0 | 2024-01-26 14:33
apisix-ingress-controller | 0.14.0 | 1.8.0 | 2024-01-29 12:04
argo | 1.0.0 | v2.12.5 | 2022-03-01 23:04
argo-cd | 7.3.3 | v2.11.3 | 2024-06-29 06:04
argo-events | 2.4.7 | v1.9.2 | 2024-06-26 13:34
argo-rollouts | 2.37.1 | v1.7.1 | 2024-06-26 19:05
argo-workflows | 0.41.11 | v3.5.8 | 2024-06-19 15:04
argocd-applicationset | 1.12.1 | v0.4.1 | 2022-05-07 00:44
argocd-image-updater | 0.10.2 | v0.13.1 | 2024-06-14 16:05
argocd-notifications | 1.8.1 | v1.2.1 | 2022-05-07 00:44
athens-proxy | 0.5.2 | 0.11.1 | 2022-05-07 00:44
cadence | 0.23.0 | 0.23.2 | 2022-03-01 23:05
cert-manager | v1.15.1 | v1.15.1 | 2024-06-27 02:05
cockroachdb | 13.0.1 | 24.1.1 | 2024-06-18 04:04
consul | 1.5.0 | 1.19.0 | 2024-06-14 03:04
dapr | 1.13.5 | 1.13.5 | 2024-06-29 08:15
emissary-ingress | 8.9.1 | 3.9.1 | 2023-11-21 00:05
etcd | 10.2.4 | 3.5.14 | 2024-06-18 20:07
external-secrets | 0.9.19 | v0.9.19 | 2024-06-05 03:33
filebrowser | 1.0.0 | v2.13.0 | 2022-03-01 23:05
frpc | 1.0.1 | v0.37.0 | 2022-03-01 23:05
frps | 1.0.1 | v0.37.0 | 2022-03-01 23:05
gitea | 10.2.0 | 1.22.0 | 2024-06-07 05:05
gitlab | 8.1.1 | v17.1.1 | 2024-06-26 19:05
gitlab-runner | 0.66.0 | 17.1.0 | 2024-06-21 07:06
grafana | 8.2.0 | 11.0.0 | 2024-06-28 07:05
haproxy-ingress | 0.14.7 | v0.14.7 | 2024-06-17 05:05
harbor | 1.15.0 | 2.11.0 | 2024-06-20 18:04
hazelcast | 5.9.1 | 5.4.0 | 2024-04-24 18:05
ingress-nginx | 4.10.1 | 1.10.1 | 2024-04-26 22:04
ingresses | 1.0.0 |  | 2022-03-01 23:05
juicefs-csi-driver | 0.20.4 | 0.24.2 | 2024-06-27 18:04
keycloak | 16.1.0 | 16.1.0 | 2022-03-01 23:05
kube-prometheus | 9.5.4 | 0.75.0 | 2024-06-27 02:05
kube-prometheus-stack | 61.1.0 | v0.75.0 | 2024-06-29 06:34
kube-state-metrics | 5.20.1 | 2.12.0 | 2024-06-24 03:33
kubed | v0.13.2 | v0.13.2 | 2022-02-25 01:48
kubernetes-dashboard | 7.5.0 |  | 2024-06-04 18:04
linkerd2 | 2.10.2 | stable-2.10.2 | 2022-03-01 23:05
linkerd2-cni | 2.10.2 | stable-2.10.2 | 2022-03-01 23:05
logging-operator | 3.17.10 | 3.17.10 | 2022-11-28 21:38
loki | 6.6.4 | 3.0.0 | 2024-06-24 20:42
loki-distributed | 0.79.0 | 2.9.6 | 2024-04-18 00:35
longhorn | 1.2.3 | v1.2.3 | 2022-03-01 23:05
meshery | v0.7.77 | v0.7.77 | 2024-06-28 21:34
metallb | 6.3.5 | 0.14.5 | 2024-06-18 20:42
minio | 8.0.10 | master | 2022-03-01 23:05
minio-console | 1.0.3 | v0.13.2 | 2022-03-01 23:05
minio-operator | 4.3.7 | v4.3.7 | 2022-02-25 07:49
minio-standalone | 1.0.2 | RELEASE.2022-01-04T07-41-07Z | 2022-03-01 23:05
nats | 1.2.0 | 2.10.16 | 2024-06-18 23:05
nats-account-server | 0.8.0 | 1.0.0 | 2022-03-13 01:04
nfs-subdir-external-provisioner | 4.0.18 | 4.0.2 | 2023-03-14 04:33
oauth2-proxy | 1.0.2 | v7.2.1 | 2022-03-01 23:05
openebs | 3.10.0 | 3.10.0 | 2023-12-19 00:37
opensearch | 2.21.0 | 2.15.0 | 2024-06-26 08:15
opensearch-dashboards | 2.19.0 | 2.15.0 | 2024-06-26 08:15
postgres-operator | 1.7.1 | 1.7.1 | 2022-03-01 23:05
postgres-operator-ui | 1.7.1 | 1.7.1 | 2022-03-01 23:05
prometheus | 25.22.0 | v2.53.0 | 2024-06-21 04:05
prometheus-blackbox-exporter | 8.17.0 | v0.25.0 | 2024-05-13 23:34
prometheus-mysql-exporter | 2.5.3 | v0.15.1 | 2024-04-29 02:04
prometheus-nats-exporter | 2.17.0 | 0.15.0 | 2024-04-23 16:07
prometheus-node-exporter | 4.37.0 | 1.8.1 | 2024-06-29 04:08
prometheus-postgres-exporter | 6.0.0 | v0.15.0 | 2024-03-10 11:33
prometheus-pushgateway | 2.13.0 | v1.8.0 | 2024-06-06 03:33
prometheus-redis-exporter | 6.3.0 | v1.61.0 | 2024-06-27 15:05
prometheus-snmp-exporter | 5.5.0 | v0.26.0 | 2024-06-29 13:35
prometheus-statsd-exporter | 0.13.1 | v0.26.1 | 2024-04-07 05:04
prometheus-target | 1.0.0 |  | 2022-03-01 23:05
rancher | 2.8.5 | v2.8.5 | 2024-06-18 05:05
redis | 19.6.0 | 7.2.5 | 2024-06-27 05:33
reflector | 7.1.262 | 7.1.262 | 2024-03-12 23:35
reloader | 1.0.115 | v1.0.115 | 2024-06-26 16:35
samba | 1.0.0 | 4.13.3 | 2022-03-01 23:05
sealed-secrets | 2.16.0 | 0.27.0 | 2024-06-20 19:43
seaweedfs | 2.92 | 2.92 | 2022-03-01 23:05
superset | 0.12.11 | 4.0.1 | 2024-05-13 23:04
temporal | 0.15.1 | 1.15.1 | 2022-03-01 23:05
traefik | 9.1.1 | 2.2.8 | 2020-09-04 22:51
vault | 0.28.0 | 1.16.1 | 2024-04-09 06:33
vector | 0.34.0 | 0.39.0-distroless-libc | 2024-06-18 02:35
verdaccio | 4.17.0 | 5.31.1 | 2024-06-17 01:04
victoria-metrics-k8s-stack | 0.23.3 | v1.101.0 | 2024-06-26 17:34
victoria-metrics-operator | 0.32.2 | v0.45.0 | 2024-06-14 17:33
wiki | 2.2.0 | latest | 2022-03-01 23:05
yugabyte | 2024.1.0 | 2024.1.0.0-b129 | 2024-06-04 23:05

## haproxytech

Name | Version | App Version | Created
-----|---------|-------------|--------
haproxy | 1.22.0 | 2.9.6 | 2024-04-04 03:33
kubernetes-ingress | 1.40.0 | 3.0.0 | 2024-06-27 22:05

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
