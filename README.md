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
alertmanager | 1.33.1 | v0.31.1 | 2026-02-12 08:57
alpine | 1.0.0 | 3.12.0 | 2022-03-01 23:04
ambassador | 6.9.5 | 1.14.4 | 2022-06-14 06:04
apisix | 2.13.0 | 3.15.0 | 2026-02-06 19:15
apisix-dashboard | 0.8.3 | 3.0.0 | 2025-06-09 14:43
apisix-ingress-controller | 1.1.2 | 2.0.1 | 2026-02-05 17:47
argo | 1.0.0 | v2.12.5 | 2022-03-01 23:04
argo-cd | 9.4.2 | v3.3.0 | 2026-02-13 20:49
argo-events | 2.4.20 | v1.9.10 | 2026-01-22 08:28
argo-rollouts | 2.40.6 | v1.8.4 | 2026-02-14 20:11
argo-workflows | 0.47.4 | v3.7.10 | 2026-02-17 07:10
argocd-applicationset | 1.12.1 | v0.4.1 | 2022-05-07 00:44
argocd-image-updater | 1.1.1 | v1.1.0 | 2026-02-16 02:10
argocd-notifications | 1.8.1 | v1.2.1 | 2022-05-07 00:44
athens-proxy | 0.5.2 | 0.11.1 | 2022-05-07 00:44
cadence | 0.23.0 | 0.23.2 | 2022-03-01 23:05
cert-manager | v1.19.3 | v1.19.3 | 2026-02-02 22:47
cockroachdb | 19.0.6 | 25.4.4 | 2026-02-12 06:45
consul | 1.9.3 | 1.22.3 | 2026-01-29 03:10
dapr | 1.16.9 | 1.16.9 | 2026-02-13 04:46
emissary-ingress | 8.12.2 | 3.12.2 | 2025-01-10 10:25
etcd | 12.0.18 | 3.6.4 | 2025-08-14 23:38
external-secrets | 2.0.0 | v2.0.0 | 2026-02-06 23:47
filebrowser | 1.0.0 | v2.13.0 | 2022-03-01 23:05
frpc | 1.0.1 | v0.37.0 | 2022-03-01 23:05
frps | 1.0.1 | v0.37.0 | 2022-03-01 23:05
gitea | 12.5.0 | 1.25.4 | 2026-01-24 04:41
gitlab | 9.8.4 | v18.8.4 | 2026-02-11 00:27
gitlab-runner | 0.85.0 | 18.8.0 | 2026-01-20 07:37
grafana | 10.5.15 | 12.3.1 | 2026-01-30 15:20
haproxy-ingress | 0.15.1 | v0.15.1 | 2026-01-05 00:07
harbor | 1.18.2 | 2.14.2 | 2026-01-26 17:46
hazelcast | 5.10.2 | 5.5.0 | 2025-03-20 12:43
ingress-nginx | 4.14.3 | 1.14.3 | 2026-02-03 07:09
ingresses | 1.0.0 |  | 2022-03-01 23:05
juicefs-csi-driver | 0.31.1 | 0.31.1 | 2026-01-22 13:43
keycloak | 16.1.0 | 16.1.0 | 2022-03-01 23:05
kube-prometheus | 11.3.10 | 0.85.0 | 2025-08-22 04:37
kube-prometheus-stack | 82.1.0 | v0.89.0 | 2026-02-17 22:27
kube-state-metrics | 7.1.0 | 2.18.0 | 2026-01-19 09:36
kubed | v0.13.2 | v0.13.2 | 2022-02-25 01:48
kubernetes-dashboard | 7.14.0 |  | 2025-10-30 22:06
linkerd2 | 2.10.2 | stable-2.10.2 | 2022-03-01 23:05
linkerd2-cni | 2.10.2 | stable-2.10.2 | 2022-03-01 23:05
logging-operator | 3.17.10 | 3.17.10 | 2022-11-28 21:38
loki | 6.53.0 | 3.6.5 | 2026-02-10 23:29
loki-distributed | 0.80.6 | 2.9.13 | 2025-11-01 04:12
longhorn | 1.2.3 | v1.2.3 | 2022-03-01 23:05
meshery | v0.8.205 | v0.8.205 | 2026-02-09 04:07
metallb | 6.4.22 | 0.15.2 | 2025-08-15 02:07
minio | 8.0.10 | master | 2022-03-01 23:05
minio-console | 1.0.3 | v0.13.2 | 2022-03-01 23:05
minio-operator | 4.3.7 | v4.3.7 | 2022-02-25 07:49
minio-standalone | 1.0.2 | RELEASE.2022-01-04T07-41-07Z | 2022-03-01 23:05
nats | 2.12.4 | 2.12.4 | 2026-01-29 05:10
nats-account-server | 0.8.1 | 1.0.0 | 2025-10-16 01:35
nfs-subdir-external-provisioner | 4.0.18 | 4.0.2 | 2023-03-14 04:33
oauth2-proxy | 1.0.2 | v7.2.1 | 2022-03-01 23:05
openebs | 3.10.0 | 3.10.0 | 2023-12-19 00:37
opensearch | 3.5.0 | 3.5.0 | 2026-02-11 07:46
opensearch-dashboards | 3.5.0 | 3.5.0 | 2026-02-11 07:46
postgres-operator | 1.7.1 | 1.7.1 | 2022-03-01 23:05
postgres-operator-ui | 1.7.1 | 1.7.1 | 2022-03-01 23:05
prometheus | 28.9.1 | v3.9.1 | 2026-02-13 05:45
prometheus-blackbox-exporter | 11.8.0 | v0.28.0 | 2026-02-06 21:29
prometheus-mysql-exporter | 2.12.0 | v0.17.2 | 2025-12-22 06:38
prometheus-nats-exporter | 2.21.1 | 0.18.0 | 2026-01-29 02:11
prometheus-node-exporter | 4.51.1 | 1.10.2 | 2026-02-03 20:49
prometheus-postgres-exporter | 7.5.0 | v0.19.0 | 2026-02-05 02:48
prometheus-pushgateway | 3.6.0 | v1.11.2 | 2025-12-06 00:41
prometheus-redis-exporter | 6.21.0 | v1.81.0 | 2026-02-12 17:20
prometheus-snmp-exporter | 9.12.0 | v0.30.1 | 2026-02-07 02:18
prometheus-statsd-exporter | 1.0.0 | v0.28.0 | 2025-10-06 23:36
prometheus-target | 1.0.0 |  | 2022-03-01 23:05
rancher | 2.13.2 | v2.13.2 | 2026-01-30 04:09
redis | 25.3.0 | 8.6.0 | 2026-02-18 12:18
reflector | 10.0.9 | 10.0.9 | 2026-02-17 05:43
reloader | 2.2.8 | v1.4.13 | 2026-02-14 03:19
samba | 1.0.0 | 4.13.3 | 2022-03-01 23:05
sealed-secrets | 2.18.1 | 0.35.0 | 2026-02-12 18:48
seaweedfs | 2.92 | 2.92 | 2022-03-01 23:05
superset | 0.15.2 | 5.0.0 | 2026-01-22 22:44
temporal | 0.15.1 | 1.15.1 | 2022-03-01 23:05
traefik | 9.1.1 | 2.2.8 | 2020-09-04 22:51
vault | 0.32.0 | 1.21.2 | 2026-01-16 16:08
vector | 0.50.0 | 0.53.0-distroless-libc | 2026-01-28 08:24
verdaccio | 4.29.0 | 6.2.3 | 2026-01-14 15:40
victoria-metrics-k8s-stack | 0.71.1 | v1.136.0 | 2026-02-17 15:24
victoria-metrics-operator | 0.58.1 | v0.67.0 | 2026-01-24 19:35
wiki | 2.2.0 | latest | 2022-03-01 23:05
yugabyte | 2025.2.1 | 2025.2.1.0-b141 | 2026-02-13 05:13

## haproxytech

Name | Version | App Version | Created
-----|---------|-------------|--------
haproxy | 1.28.0 | 3.3.1 | 2026-01-30 00:22
kubernetes-ingress | 1.48.0 | 3.2.5 | 2026-02-10 02:49

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
