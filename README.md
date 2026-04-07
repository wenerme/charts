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
alertmanager | 1.34.0 | v0.31.1 | 2026-03-19 23:20
alpine | 1.0.0 | 3.12.0 | 2022-03-01 23:04
ambassador | 6.9.5 | 1.14.4 | 2022-06-14 06:04
apisix | 2.13.0 | 3.15.0 | 2026-02-06 19:15
apisix-dashboard | 0.8.3 | 3.0.0 | 2025-06-09 14:43
apisix-ingress-controller | 1.1.2 | 2.0.1 | 2026-02-05 17:47
argo | 1.0.0 | v2.12.5 | 2022-03-01 23:04
argo-cd | 9.4.17 | v3.3.6 | 2026-03-27 23:49
argo-events | 2.4.21 | v1.9.10 | 2026-03-19 01:16
argo-rollouts | 2.40.9 | v1.9.0 | 2026-03-26 22:35
argo-workflows | 1.0.7 | v4.0.4 | 2026-04-03 17:49
argocd-applicationset | 1.12.1 | v0.4.1 | 2022-05-07 00:44
argocd-image-updater | 1.1.4 | v1.1.1 | 2026-03-25 14:50
argocd-notifications | 1.8.1 | v1.2.1 | 2022-05-07 00:44
athens-proxy | 0.5.2 | 0.11.1 | 2022-05-07 00:44
cadence | 0.23.0 | 0.23.2 | 2022-03-01 23:05
cert-manager | v1.20.1 | v1.20.1 | 2026-03-28 03:45
cockroachdb | 20.0.2 | 26.1.1 | 2026-03-27 19:47
consul | 1.9.6 | 1.22.6 | 2026-04-01 04:47
dapr | 1.17.3 | 1.17.3 | 2026-03-27 04:13
emissary-ingress | 8.12.2 | 3.12.2 | 2025-01-10 10:25
etcd | 12.0.18 | 3.6.4 | 2025-08-14 23:38
external-secrets | 2.2.0 | v2.2.0 | 2026-03-21 00:47
filebrowser | 1.0.0 | v2.13.0 | 2022-03-01 23:05
frpc | 1.0.1 | v0.37.0 | 2022-03-01 23:05
frps | 1.0.1 | v0.37.0 | 2022-03-01 23:05
gitea | 12.5.0 | 1.25.4 | 2026-01-24 04:41
gitlab | 9.10.1 | v18.10.1 | 2026-03-25 12:19
gitlab-runner | 0.87.1 | 18.10.1 | 2026-04-06 18:28
grafana | 10.5.15 | 12.3.1 | 2026-01-30 15:20
haproxy-ingress | 0.16.0 | v0.16.0 | 2026-03-23 19:47
harbor | 1.18.3 | 2.14.3 | 2026-03-19 11:09
hazelcast | 5.10.2 | 5.5.0 | 2025-03-20 12:43
ingress-nginx | 4.15.1 | 1.15.1 | 2026-03-20 05:46
ingresses | 1.0.0 |  | 2022-03-01 23:05
juicefs-csi-driver | 0.31.4 | 0.31.4 | 2026-03-27 14:00
keycloak | 16.1.0 | 16.1.0 | 2022-03-01 23:05
kube-prometheus | 11.3.10 | 0.85.0 | 2025-08-22 04:37
kube-prometheus-stack | 83.0.2 | v0.90.1 | 2026-04-08 03:28
kube-state-metrics | 7.2.2 | 2.18.0 | 2026-03-23 22:51
kubed | v0.13.2 | v0.13.2 | 2022-02-25 01:48
kubernetes-dashboard | 7.14.0 |  | 2025-10-30 22:06
linkerd2 | 2.10.2 | stable-2.10.2 | 2022-03-01 23:05
linkerd2-cni | 2.10.2 | stable-2.10.2 | 2022-03-01 23:05
logging-operator | 3.17.10 | 3.17.10 | 2022-11-28 21:38
loki | 6.55.0 | 3.6.7 | 2026-03-12 06:10
loki-distributed | 0.80.6 | 2.9.13 | 2025-11-01 04:12
longhorn | 1.2.3 | v1.2.3 | 2022-03-01 23:05
meshery | v1.0.5 | v1.0.5 | 2026-04-08 04:48
metallb | 6.4.22 | 0.15.2 | 2025-08-15 02:07
minio | 8.0.10 | master | 2022-03-01 23:05
minio-console | 1.0.3 | v0.13.2 | 2022-03-01 23:05
minio-operator | 4.3.7 | v4.3.7 | 2022-02-25 07:49
minio-standalone | 1.0.2 | RELEASE.2022-01-04T07-41-07Z | 2022-03-01 23:05
nats | 2.12.6 | 2.12.6 | 2026-03-25 22:30
nats-account-server | 0.8.1 | 1.0.0 | 2025-10-16 01:35
nfs-subdir-external-provisioner | 4.0.18 | 4.0.2 | 2023-03-14 04:33
oauth2-proxy | 1.0.2 | v7.2.1 | 2022-03-01 23:05
openebs | 3.10.0 | 3.10.0 | 2023-12-19 00:37
opensearch | 3.5.0 | 3.5.0 | 2026-02-11 07:46
opensearch-dashboards | 3.5.0 | 3.5.0 | 2026-02-11 07:46
postgres-operator | 1.7.1 | 1.7.1 | 2022-03-01 23:05
postgres-operator-ui | 1.7.1 | 1.7.1 | 2022-03-01 23:05
prometheus | 29.1.0 | v3.11.1 | 2026-04-08 06:16
prometheus-blackbox-exporter | 11.9.1 | v0.28.0 | 2026-03-25 21:34
prometheus-mysql-exporter | 2.13.1 | v0.19.0 | 2026-04-07 22:37
prometheus-nats-exporter | 2.22.1 | 0.19.2 | 2026-03-26 22:35
prometheus-node-exporter | 4.53.1 | 1.11.1 | 2026-04-08 00:49
prometheus-postgres-exporter | 7.5.2 | v0.19.1 | 2026-03-25 07:11
prometheus-pushgateway | 3.6.0 | v1.11.2 | 2025-12-06 00:41
prometheus-redis-exporter | 6.22.0 | v1.82.0 | 2026-03-09 05:39
prometheus-snmp-exporter | 9.13.1 | v0.30.1 | 2026-03-26 02:23
prometheus-statsd-exporter | 1.0.0 | v0.28.0 | 2025-10-06 23:36
prometheus-target | 1.0.0 |  | 2022-03-01 23:05
rancher | 2.13.3 | v2.13.3 | 2026-02-26 08:28
redis | 25.3.9 | 8.6.2 | 2026-03-25 04:16
reflector | 10.0.28 | 10.0.28 | 2026-04-08 05:48
reloader | 2.2.9 | v1.4.14 | 2026-03-06 09:37
samba | 1.0.0 | 4.13.3 | 2022-03-01 23:05
sealed-secrets | 2.18.4 | 0.36.1 | 2026-03-12 21:56
seaweedfs | 2.92 | 2.92 | 2022-03-01 23:05
superset | 0.15.2 | 5.0.0 | 2026-01-22 22:44
temporal | 0.15.1 | 1.15.1 | 2022-03-01 23:05
traefik | 9.1.1 | 2.2.8 | 2020-09-04 22:51
vault | 0.32.0 | 1.21.2 | 2026-01-16 16:08
vector | 0.51.0 | 0.54.0-distroless-libc | 2026-03-11 04:11
verdaccio | 4.31.0 | 6.2.3 | 2026-03-19 03:05
victoria-metrics-k8s-stack | 0.72.6 | v1.139.0 | 2026-04-03 03:24
victoria-metrics-operator | 0.59.3 | v0.68.3 | 2026-03-16 21:35
wiki | 2.2.0 | latest | 2022-03-01 23:05
yugabyte | 2025.2.2 | 2025.2.2.0-b80 | 2026-03-12 23:26

## haproxytech

Name | Version | App Version | Created
-----|---------|-------------|--------
haproxy | 1.28.1 | 3.3.6 | 2026-03-23 19:20
kubernetes-ingress | 1.49.0 | 3.2.6 | 2026-02-24 21:33

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
