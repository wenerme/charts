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
https://athens.blob.core.windows.net/charts | 1
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
alertmanager | 0.18.1 | v0.23.0 | 2022-05-27 06:04
alpine | 1.0.0 | 3.12.0 | 2022-03-01 23:04
ambassador | 6.9.4 | 1.14.3 | 2022-03-01 23:21
argo | 1.0.0 | v2.12.5 | 2022-03-01 23:04
argo-cd | 4.8.3 | v2.3.4 | 2022-06-08 14:38
argo-workflows | 0.16.3 | v3.3.6 | 2022-06-11 01:06
argocd-applicationset | 1.12.1 | v0.4.1 | 2022-05-07 00:44
argocd-notifications | 1.8.1 | v1.2.1 | 2022-05-07 00:44
athens-proxy | 0.5.2 | 0.11.1 | 2022-05-07 00:44
cadence | 0.23.0 | 0.23.2 | 2022-03-01 23:05
cert-manager | v1.8.0 | v1.8.0 | 2022-04-06 03:33
cockroachdb | 8.1.0 | 22.1.1 | 2022-06-10 19:33
consul | 0.44.0 | 1.12.0 | 2022-05-18 08:47
dapr | 1.7.4 | 1.7.4 | 2022-06-01 07:37
emissary-ingress | 7.4.1 | 2.3.1 | 2022-06-11 01:36
filebrowser | 1.0.0 | v2.13.0 | 2022-03-01 23:05
frpc | 1.0.1 | v0.37.0 | 2022-03-01 23:05
frps | 1.0.1 | v0.37.0 | 2022-03-01 23:05
gitea | 5.0.9 | 1.16.8 | 2022-06-03 14:04
gitlab | 6.0.2 | 15.0.2 | 2022-06-07 23:37
gitlab-runner | 0.41.0 | 15.0.0 | 2022-05-20 22:07
grafana | 6.29.11 | 8.5.3 | 2022-06-11 11:46
haproxy-ingress | 0.13.7 | v0.13.7 | 2022-03-27 02:04
harbor | 1.9.1 | 2.5.1 | 2022-06-01 10:53
hazelcast | 5.4.1 | 5.1.1 | 2022-06-09 16:11
ingress-nginx | 4.1.4 | 1.2.1 | 2022-06-10 19:33
ingresses | 1.0.0 |  | 2022-03-01 23:05
keycloak | 16.1.0 | 16.1.0 | 2022-03-01 23:05
kube-prometheus | 8.0.6 | 0.57.0 | 2022-06-11 00:04
kube-prometheus-stack | 36.0.0 | 0.57.0 | 2022-06-11 07:34
kube-state-metrics | 4.9.0 | 2.5.0 | 2022-06-10 22:04
kubed | v0.13.2 | v0.13.2 | 2022-02-25 01:48
kubernetes-dashboard | 5.7.0 | 2.6.0 | 2022-06-08 20:05
linkerd2 | 2.10.2 | stable-2.10.2 | 2022-03-01 23:05
linkerd2-cni | 2.10.2 | stable-2.10.2 | 2022-03-01 23:05
logging-operator | 3.17.7 | 3.17.7 | 2022-05-28 03:33
loki | 2.12.0 | v2.5.0 | 2022-06-02 02:04
loki-distributed | 0.48.4 | 2.5.0 | 2022-05-18 21:18
longhorn | 1.2.3 | v1.2.3 | 2022-03-01 23:05
meshery | v0.6.1 | v0.6.0 | 2022-01-01 06:58
metallb | 3.0.9 | 0.12.1 | 2022-06-11 00:43
minio | 8.0.10 | master | 2022-03-01 23:05
minio-console | 1.0.3 | v0.13.2 | 2022-03-01 23:05
minio-operator | 4.3.7 | v4.3.7 | 2022-02-25 07:49
minio-standalone | 1.0.2 | RELEASE.2022-01-04T07-41-07Z | 2022-03-01 23:05
nats | 0.17.0 | 2.8.0 | 2022-05-14 06:36
nats-account-server | 0.8.0 | 1.0.0 | 2022-03-13 01:04
nfs-subdir-external-provisioner | 4.0.16 | 4.0.2 | 2022-02-10 11:58
oauth2-proxy | 1.0.2 | v7.2.1 | 2022-03-01 23:05
openebs | 3.2.0 | 3.2.0 | 2022-05-07 00:44
opensearch | 2.0.1 | 2.0.0 | 2022-05-27 03:03
opensearch-dashboards | 2.0.1 | 2.0.0 | 2022-05-27 03:03
postgres-operator | 1.7.1 | 1.7.1 | 2022-03-01 23:05
postgres-operator-ui | 1.7.1 | 1.7.1 | 2022-03-01 23:05
prometheus | 15.10.1 | 2.34.0 | 2022-06-12 16:04
prometheus-blackbox-exporter | 5.8.1 | 0.20.0 | 2022-05-17 18:37
prometheus-mysql-exporter | 1.8.1 | v0.14.0 | 2022-06-01 14:08
prometheus-nats-exporter | 2.9.3 | 0.9.3 | 2022-05-27 22:34
prometheus-node-exporter | 3.3.0 | 1.3.1 | 2022-05-27 06:04
prometheus-postgres-exporter | 3.0.1 | 0.10.1 | 2022-06-12 17:34
prometheus-pushgateway | 1.18.2 | 1.4.2 | 2022-06-10 22:33
prometheus-redis-exporter | 4.7.0 | 1.27.0 | 2022-05-17 15:04
prometheus-snmp-exporter | 1.1.0 | 0.19.0 | 2022-05-07 00:44
prometheus-statsd-exporter | 0.4.2 | 0.22.1 | 2021-11-15 19:42
prometheus-target | 1.0.0 |  | 2022-03-01 23:05
rancher | 2.6.5 | v2.6.5 | 2022-05-13 08:16
redis | 16.12.1 | 6.2.7 | 2022-06-11 00:04
reflector | 6.1.47 | 6.1.47 | 2022-03-21 16:37
reloader | v0.0.114 | v0.0.114 | 2022-06-10 00:42
samba | 1.0.0 | 4.13.3 | 2022-03-01 23:05
sealed-secrets | 2.2.0 | v0.18.0 | 2022-06-03 00:43
seaweedfs | 2.92 | 2.92 | 2022-03-01 23:05
temporal | 0.15.1 | 1.15.1 | 2022-03-01 23:05
traefik | 9.1.1 | 2.2.8 | 2020-09-04 22:51
vault | 0.20.1 | 1.10.3 | 2022-05-27 01:08
verdaccio | 4.9.0 | 5.5.0 | 2022-06-07 16:38
victoria-metrics-k8s-stack | 0.9.3 | 1.77.2 | 2022-06-02 16:39
victoria-metrics-operator | 0.10.2 | 0.25.1 | 2022-06-02 16:39
wiki | 2.2.0 | latest | 2022-03-01 23:05
yugabyte | 2.13.2 | 2.13.2.0-b135 | 2022-05-26 00:43

## haproxytech

Name | Version | App Version | Created
-----|---------|-------------|--------
haproxy | 1.14.0 | 2.5.5 | 2022-05-07 00:44
kubernetes-ingress | 1.22.0 | 1.8.0 | 2022-06-02 21:18

## banzai

Name | Version | App Version | Created
-----|---------|-------------|--------
cadence | 0.23.0 | 0.23.2 | 2021-12-03 21:20
vault | 1.15.5 | 1.15.3 | 2022-05-26 17:36

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
