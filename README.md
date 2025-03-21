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
alertmanager | 1.16.0 | v0.28.1 | 2025-03-20 22:38
alpine | 1.0.0 | 3.12.0 | 2022-03-01 23:04
ambassador | 6.9.5 | 1.14.4 | 2022-06-14 06:04
apisix | 2.10.0 | 3.11.0 | 2024-10-18 15:05
apisix-dashboard | 0.8.2 | 3.0.0 | 2024-01-26 14:33
apisix-ingress-controller | 0.14.0 | 1.8.0 | 2024-01-29 12:04
argo | 1.0.0 | v2.12.5 | 2022-03-01 23:04
argo-cd | 7.8.13 | v2.14.7 | 2025-03-20 12:43
argo-events | 2.4.14 | v1.9.5 | 2025-03-20 12:43
argo-rollouts | 2.39.2 | v1.8.1 | 2025-03-21 15:34
argo-workflows | 0.45.11 | v3.6.5 | 2025-03-20 12:43
argocd-applicationset | 1.12.1 | v0.4.1 | 2022-05-07 00:44
argocd-image-updater | 0.12.0 | v0.15.2 | 2025-01-25 21:33
argocd-notifications | 1.8.1 | v1.2.1 | 2022-05-07 00:44
athens-proxy | 0.5.2 | 0.11.1 | 2022-05-07 00:44
cadence | 0.23.0 | 0.23.2 | 2022-03-01 23:05
cert-manager | v1.17.1 | v1.17.1 | 2025-02-13 19:34
cockroachdb | 16.0.2 | 25.1.2 | 2025-03-20 12:43
consul | 1.6.2 | 1.20.2 | 2025-01-10 10:24
dapr | 1.15.3 | 1.15.3 | 2025-03-20 12:43
emissary-ingress | 8.12.2 | 3.12.2 | 2025-01-10 10:25
etcd | 11.1.5 | 3.5.19 | 2025-03-20 12:43
external-secrets | 0.15.0 | v0.15.0 | 2025-03-20 12:42
filebrowser | 1.0.0 | v2.13.0 | 2022-03-01 23:05
frpc | 1.0.1 | v0.37.0 | 2022-03-01 23:05
frps | 1.0.1 | v0.37.0 | 2022-03-01 23:05
gitea | 11.0.0 | 1.23.4 | 2025-03-02 02:06
gitlab | 8.10.0 | v17.10.0 | 2025-03-20 22:05
gitlab-runner | 0.75.0 | 17.10.0 | 2025-03-20 12:43
grafana | 8.10.4 | 11.5.2 | 2025-03-20 12:43
haproxy-ingress | 0.14.8 | v0.14.8 | 2025-03-20 12:43
harbor | 1.16.2 | 2.12.2 | 2025-01-20 14:39
hazelcast | 5.10.2 | 5.5.0 | 2025-03-20 12:43
ingress-nginx | 4.12.0 | 1.12.0 | 2025-01-10 10:24
ingresses | 1.0.0 |  | 2022-03-01 23:05
juicefs-csi-driver | 0.23.0 | 0.27.0 | 2025-03-20 12:42
keycloak | 16.1.0 | 16.1.0 | 2022-03-01 23:05
kube-prometheus | 11.1.3 | 0.81.0 | 2025-03-20 12:43
kube-prometheus-stack | 70.1.1 | v0.81.0 | 2025-03-20 12:43
kube-state-metrics | 5.31.0 | 2.15.0 | 2025-03-20 22:38
kubed | v0.13.2 | v0.13.2 | 2022-02-25 01:48
kubernetes-dashboard | 7.11.1 |  | 2025-03-20 12:43
linkerd2 | 2.10.2 | stable-2.10.2 | 2022-03-01 23:05
linkerd2-cni | 2.10.2 | stable-2.10.2 | 2022-03-01 23:05
logging-operator | 3.17.10 | 3.17.10 | 2022-11-28 21:38
loki | 6.28.0 | 3.4.2 | 2025-03-20 12:43
loki-distributed | 0.80.2 | 2.9.10 | 2025-03-20 12:43
longhorn | 1.2.3 | v1.2.3 | 2022-03-01 23:05
meshery | v0.8.50 | v0.8.50 | 2025-03-20 12:43
metallb | 6.4.8 | 0.14.9 | 2025-03-20 12:43
minio | 8.0.10 | master | 2022-03-01 23:05
minio-console | 1.0.3 | v0.13.2 | 2022-03-01 23:05
minio-operator | 4.3.7 | v4.3.7 | 2022-02-25 07:49
minio-standalone | 1.0.2 | RELEASE.2022-01-04T07-41-07Z | 2022-03-01 23:05
nats | 1.3.1 | 2.11.0 | 2025-03-21 14:07
nats-account-server | 0.8.0 | 1.0.0 | 2022-03-13 01:04
nfs-subdir-external-provisioner | 4.0.18 | 4.0.2 | 2023-03-14 04:33
oauth2-proxy | 1.0.2 | v7.2.1 | 2022-03-01 23:05
openebs | 3.10.0 | 3.10.0 | 2023-12-19 00:37
opensearch | 2.32.0 | 2.19.1 | 2025-02-28 11:38
opensearch-dashboards | 2.28.0 | 2.19.1 | 2025-02-28 11:38
postgres-operator | 1.7.1 | 1.7.1 | 2022-03-01 23:05
postgres-operator-ui | 1.7.1 | 1.7.1 | 2022-03-01 23:05
prometheus | 27.6.0 | v3.2.1 | 2025-03-21 06:05
prometheus-blackbox-exporter | 9.4.0 | v0.26.0 | 2025-03-20 22:38
prometheus-mysql-exporter | 2.9.1 | v0.17.2 | 2025-02-28 22:05
prometheus-nats-exporter | 2.18.0 | 0.16.0 | 2025-01-10 10:24
prometheus-node-exporter | 4.45.0 | 1.9.0 | 2025-03-21 05:34
prometheus-postgres-exporter | 6.10.0 | v0.17.0 | 2025-03-20 12:43
prometheus-pushgateway | 3.0.0 | v1.11.0 | 2025-02-08 00:38
prometheus-redis-exporter | 6.9.0 | v1.67.0 | 2025-01-10 10:24
prometheus-snmp-exporter | 9.0.0 | v0.28.0 | 2025-03-20 12:43
prometheus-statsd-exporter | 0.15.0 | v0.28.0 | 2024-10-27 03:34
prometheus-target | 1.0.0 |  | 2022-03-01 23:05
rancher | 2.10.3 | v2.10.3 | 2025-02-28 04:06
redis | 20.11.3 | 7.4.2 | 2025-03-20 12:43
reflector | 9.0.322 | 9.0.322 | 2025-03-20 12:43
reloader | 2.0.0 | v1.3.0 | 2025-03-20 12:44
samba | 1.0.0 | 4.13.3 | 2022-03-01 23:05
sealed-secrets | 2.17.1 | 0.28.0 | 2025-01-16 22:35
seaweedfs | 2.92 | 2.92 | 2022-03-01 23:05
superset | 0.14.1 | 4.1.1 | 2025-03-20 12:42
temporal | 0.15.1 | 1.15.1 | 2022-03-01 23:05
traefik | 9.1.1 | 2.2.8 | 2020-09-04 22:51
vault | 0.29.1 | 1.18.1 | 2024-11-21 05:34
vector | 0.41.0 | 0.45.0-distroless-libc | 2025-02-25 05:04
verdaccio | 4.26.1 | 6.0.5 | 2025-01-10 10:24
victoria-metrics-k8s-stack | 0.39.0 | v1.113.0 | 2025-03-20 12:43
victoria-metrics-operator | 0.43.1 | v0.54.1 | 2025-03-21 12:06
wiki | 2.2.0 | latest | 2022-03-01 23:05
yugabyte | 2024.2.2 | 2024.2.2.0-b70 | 2025-02-28 03:05

## haproxytech

Name | Version | App Version | Created
-----|---------|-------------|--------
haproxy | 1.24.0 | 3.1.5 | 2025-02-22 18:05
kubernetes-ingress | 1.44.2 | 3.1.2 | 2025-02-28 15:05

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
