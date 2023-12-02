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
https://openebs.github.io/charts | 1
https://stakater.github.io/stakater-charts | 1

## main

Name | Version | App Version | Created
-----|---------|-------------|--------
alertmanager | 1.7.0 | v0.26.0 | 2023-09-27 21:06
alpine | 1.0.0 | 3.12.0 | 2022-03-01 23:04
ambassador | 6.9.5 | 1.14.4 | 2022-06-14 06:04
apisix | 2.4.0 | 3.7.0 | 2023-11-24 09:26
apisix-dashboard | 0.8.1 | 3.0.0 | 2023-07-12 09:33
apisix-ingress-controller | 0.12.2 | 1.7.0 | 2023-09-28 16:34
argo | 1.0.0 | v2.12.5 | 2022-03-01 23:04
argo-cd | 5.51.6 | v2.9.3 | 2023-12-02 19:33
argo-events | 2.4.1 | v1.8.1 | 2023-09-04 09:25
argo-rollouts | 2.32.5 | v1.6.2 | 2023-11-29 22:04
argo-workflows | 0.39.5 | v3.5.2 | 2023-11-28 05:33
argocd-applicationset | 1.12.1 | v0.4.1 | 2022-05-07 00:44
argocd-image-updater | 0.9.1 | v0.12.2 | 2023-09-01 16:41
argocd-notifications | 1.8.1 | v1.2.1 | 2022-05-07 00:44
athens-proxy | 0.5.2 | 0.11.1 | 2022-05-07 00:44
cadence | 0.23.0 | 0.23.2 | 2022-03-01 23:05
cert-manager | v1.13.2 | v1.13.2 | 2023-10-30 21:05
cockroachdb | 11.2.2 | 23.1.12 | 2023-11-14 13:33
consul | 1.3.0 | 1.17.0 | 2023-11-09 03:05
dapr | 1.12.2 | 1.12.2 | 2023-11-19 05:04
emissary-ingress | 8.9.1 | 3.9.1 | 2023-11-21 00:05
etcd | 9.7.3 | 3.5.10 | 2023-11-24 19:33
external-secrets | 0.9.9 | v0.9.9 | 2023-11-14 03:33
filebrowser | 1.0.0 | v2.13.0 | 2022-03-01 23:05
frpc | 1.0.1 | v0.37.0 | 2022-03-01 23:05
frps | 1.0.1 | v0.37.0 | 2022-03-01 23:05
gitea | 9.6.1 | 1.21.1 | 2023-11-28 05:04
gitlab | 7.6.1 | v16.6.1 | 2023-12-01 02:34
gitlab-runner | 0.59.2 | 16.6.1 | 2023-11-25 11:04
grafana | 7.0.11 | 10.2.2 | 2023-11-29 19:34
haproxy-ingress | 0.14.5 | v0.14.5 | 2023-09-01 20:05
harbor | 1.13.1 | 2.9.1 | 2023-11-03 10:11
hazelcast | 5.8.13 | 5.3.6 | 2023-11-15 22:04
ingress-nginx | 4.8.3 | 1.9.4 | 2023-10-26 01:04
ingresses | 1.0.0 |  | 2022-03-01 23:05
keycloak | 16.1.0 | 16.1.0 | 2022-03-01 23:05
kube-prometheus | 8.22.6 | 0.70.0 | 2023-12-01 03:33
kube-prometheus-stack | 54.2.2 | v0.69.1 | 2023-11-23 23:33
kube-state-metrics | 5.15.2 | 2.10.1 | 2023-11-12 06:04
kubed | v0.13.2 | v0.13.2 | 2022-02-25 01:48
kubernetes-dashboard | 7.0.3 | v3.0.0-alpha0 | 2023-07-21 18:05
linkerd2 | 2.10.2 | stable-2.10.2 | 2022-03-01 23:05
linkerd2-cni | 2.10.2 | stable-2.10.2 | 2022-03-01 23:05
logging-operator | 3.17.10 | 3.17.10 | 2022-11-28 21:38
loki | 5.39.0 | 2.9.2 | 2023-11-29 18:34
loki-distributed | 0.77.0 | 2.9.2 | 2023-11-29 21:06
longhorn | 1.2.3 | v1.2.3 | 2022-03-01 23:05
meshery | v0.6.185 | v0.6.185 | 2023-11-30 06:34
metallb | 4.7.15 | 0.13.12 | 2023-11-22 03:33
minio | 8.0.10 | master | 2022-03-01 23:05
minio-console | 1.0.3 | v0.13.2 | 2022-03-01 23:05
minio-operator | 4.3.7 | v4.3.7 | 2022-02-25 07:49
minio-standalone | 1.0.2 | RELEASE.2022-01-04T07-41-07Z | 2022-03-01 23:05
nats | 1.1.5 | 2.10.5 | 2023-11-11 21:33
nats-account-server | 0.8.0 | 1.0.0 | 2022-03-13 01:04
nfs-subdir-external-provisioner | 4.0.18 | 4.0.2 | 2023-03-14 04:33
oauth2-proxy | 1.0.2 | v7.2.1 | 2022-03-01 23:05
openebs | 3.9.0 | 3.9.0 | 2023-09-06 14:34
opensearch | 2.17.0 | 2.11.1 | 2023-12-01 09:30
opensearch-dashboards | 2.15.0 | 2.11.1 | 2023-12-01 09:30
postgres-operator | 1.7.1 | 1.7.1 | 2022-03-01 23:05
postgres-operator-ui | 1.7.1 | 1.7.1 | 2022-03-01 23:05
prometheus | 25.8.0 | v2.48.0 | 2023-11-21 19:04
prometheus-blackbox-exporter | 8.6.1 | v0.24.0 | 2023-11-17 17:33
prometheus-mysql-exporter | 2.2.0 | v0.15.0 | 2023-11-16 16:34
prometheus-nats-exporter | 2.13.0 | 0.12.0 | 2023-07-21 16:05
prometheus-node-exporter | 4.24.0 | 1.7.0 | 2023-11-15 20:42
prometheus-postgres-exporter | 5.2.0 | v0.15.0 | 2023-11-09 01:33
prometheus-pushgateway | 2.4.2 | v1.6.2 | 2023-11-11 19:04
prometheus-redis-exporter | 6.0.1 | v1.55.0 | 2023-10-17 22:33
prometheus-snmp-exporter | 1.8.1 | v0.21.0 | 2023-10-04 04:34
prometheus-statsd-exporter | 0.10.1 | v0.24.0 | 2023-09-23 16:04
prometheus-target | 1.0.0 |  | 2022-03-01 23:05
rancher | 2.7.9 | v2.7.9 | 2023-11-03 02:34
redis | 18.4.0 | 7.2.3 | 2023-11-16 20:41
reflector | 7.1.216 | 7.1.216 | 2023-10-18 15:04
reloader | 1.0.52 | v1.0.52 | 2023-11-15 23:05
samba | 1.0.0 | 4.13.3 | 2022-03-01 23:05
sealed-secrets | 2.13.3 | v0.24.4 | 2023-11-15 21:33
seaweedfs | 2.92 | 2.92 | 2022-03-01 23:05
temporal | 0.15.1 | 1.15.1 | 2022-03-01 23:05
traefik | 9.1.1 | 2.2.8 | 2020-09-04 22:51
vault | 0.27.0 | 1.15.2 | 2023-11-17 06:33
vector | 0.29.0 | 0.34.1-distroless-libc | 2023-11-17 05:04
verdaccio | 4.12.0 | 5.21.1 | 2023-05-30 19:04
victoria-metrics-k8s-stack | 0.18.8 | v1.95.1 | 2023-11-17 05:33
victoria-metrics-operator | 0.27.6 | 0.39.3 | 2023-11-17 05:33
wiki | 2.2.0 | latest | 2022-03-01 23:05
yugabyte | 2.20.0+0 | 2.20.0.0-b76 | 2023-11-14 04:35

## haproxytech

Name | Version | App Version | Created
-----|---------|-------------|--------
haproxy | 1.19.3 | 2.8.2 | 2023-08-24 01:04
kubernetes-ingress | 1.35.3 | 1.10.10 | 2023-11-24 22:34

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
