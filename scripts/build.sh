#!/bin/bash
set -ex

export PATH=$PWD/scripts:$PATH

# sync repos
# ============

# nats
sync-chart nats https://nats-io.github.io/k8s/helm/charts

# prometheus - https://github.com/prometheus-community/helm-charts/tree/main/charts
sync-chart prometheus-postgres-exporter https://prometheus-community.github.io/helm-charts
sync-chart prometheus-blackbox-exporter https://prometheus-community.github.io/helm-charts
sync-chart prometheus-mysql-exporter https://prometheus-community.github.io/helm-charts
sync-chart prometheus-snmp-exporter https://prometheus-community.github.io/helm-charts
sync-chart prometheus-redis-exporter https://prometheus-community.github.io/helm-charts
sync-chart prometheus-statsd-exporter https://prometheus-community.github.io/helm-charts

# athens
sync-chart athens-proxy https://athens.blob.core.windows.net/charts

# nfs
sync-chart nfs-subdir-external-provisioner https://kubernetes-sigs.github.io/nfs-subdir-external-provisioner

# grafana
sync-chart grafana https://grafana.github.io/helm-charts
sync-chart loki https://grafana.github.io/helm-charts
sync-chart loki-distributed https://grafana.github.io/helm-charts

sync-chart kubed https://charts.appscode.com/stable
sync-chart reflector https://emberstack.github.io/helm-charts
sync-chart verdaccio https://charts.verdaccio.org

# argo - https://github.com/argoproj/argo-helm/tree/master/charts
sync-chart argo-cd https://argoproj.github.io/argo-helm
sync-chart argo-workflows https://argoproj.github.io/argo-helm
sync-chart argocd-applicationset https://argoproj.github.io/argo-helm
sync-chart argocd-notifications https://argoproj.github.io/argo-helm

sync-chart sealed-secrets https://bitnami-labs.github.io/sealed-secrets

sync-chart rancher https://releases.rancher.com/server-charts/stable

sync-chart dapr https://dapr.github.io/helm-charts

sync-chart gitea https://dl.gitea.io/charts/
sync-chart cockroachdb https://charts.cockroachdb.com

sync-chart hazelcast https://hazelcast-charts.s3.amazonaws.com

sync-chart yugabyte https://charts.yugabyte.com

sync-chart ingress-nginx https://kubernetes.github.io/ingress-nginx

# new location https://github.com/haproxytech/helm-charts
# sync-chart haproxy-ingress https://kubernetes-charts-incubator.storage.googleapis.com

sync-chart cert-manager https://charts.jetstack.io

sync-chart traefik https://containous.github.io/traefik-helm-chart


sync-chart consul https://helm.releases.hashicorp.com
sync-chart vault https://helm.releases.hashicorp.com

sync-chart redis https://charts.bitnami.com/bitnami
sync-chart metallb https://charts.bitnami.com/bitnami
sync-chart kube-prometheus https://charts.bitnami.com/bitnami

sync-chart kubernetes-dashboard https://kubernetes.github.io/dashboard/

sync-chart harbor https://helm.goharbor.io

sync-chart ambassador https://www.getambassador.io

# linkerd
sync-chart linkerd2 https://helm.linkerd.io/stable
sync-chart linkerd2-cni https://helm.linkerd.io/stable

# sync-chart minio https://helm.min.io/
sync-chart minio-operator https://operator.min.io/

# seaweedfs - https://github.com/chrislusf/seaweedfs/pull/2112
rm -rf seaweedfs
ver=$(github-latest-version chrislusf/seaweedfs)
curl -sL https://github.com/chrislusf/seaweedfs/archive/$ver.tar.gz | tar zxvf - seaweedfs-$ver/k8s/seaweedfs --strip-components 2

# wiki.js
rm -rf wiki
ver=$(github-latest-version Requarks/wiki)
curl -sL https://github.com/Requarks/wiki/archive/$ver.tar.gz | tar zxvf - wiki-$ver/dev/helm --strip-components 2
mv helm wiki

# longhorn
rm -rf longhorn; mkdir -p longhorn
ver=$(github-latest-version longhorn/longhorn)
curl -sL https://github.com/longhorn/longhorn/archive/$ver.tar.gz | tar zxvf - -C longhorn longhorn-${ver##v}/chart --strip-components 2

# postgres-operator
rm -rf postgres-operator postgres-operator-ui
ver=$(github-latest-version zalando/postgres-operator)
curl -sL https://github.com/zalando/postgres-operator/archive/$ver.tar.gz | tar zxvf - postgres-operator-${ver##v}/charts --strip-components 2

# openebs
sync-chart openebs https://openebs.github.io/charts

# gitlab
sync-chart gitlab-runner https://charts.gitlab.io
sync-chart gitlab https://charts.gitlab.io

# reloader
sync-chart reloader https://stakater.github.io/stakater-charts

# building
# ====================
# main
./scripts/build-repo -c . -a dist -o charts
[ ! -e updates ] || cat updates >> message

## wener
( cd wener; make update )
./scripts/build-repo -c wener/charts -a wener/dist -o charts/wener/
git diff --quiet --staged master -- wener/charts || {
  echo -n "update wener/charts" >> message
}

## build doc
./scripts/build-doc

rsync -a public/ charts/
cp README.md charts/
git status
