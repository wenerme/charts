#!/bin/bash
set -ex

export PATH=$PWD/scripts:$PATH

# https://stackoverflow.com/a/4024263/1870054
verlte() {
    [  "$1" = "`echo -e "$1\n$2" | sort -V | head -n1`" ]
}

verlt() {
    [ "$1" = "$2" ] && return 1 || verlte $1 $2
}

# prometheus - https://github.com/prometheus-community/helm-charts/tree/main/charts
sync-chart prometheus-postgres-exporter https://prometheus-community.github.io/helm-charts
sync-chart prometheus-blackbox-exporter https://prometheus-community.github.io/helm-charts
sync-chart prometheus-mysql-exporter https://prometheus-community.github.io/helm-charts
sync-chart prometheus-snmp-exporter https://prometheus-community.github.io/helm-charts
sync-chart prometheus-redis-exporter https://prometheus-community.github.io/helm-charts

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

sync-chart minio https://helm.min.io/

# seaweedfs
rm -rf seaweedfs
ver=$(github-latest-version chrislusf/seaweedfs)
curl -sL https://github.com/chrislusf/seaweedfs/archive/$ver.tar.gz | tar zxvf - seaweedfs-$ver/k8s/seaweedfs --strip-components 2

# wiki.js
rm -rf wiki
ver=$(github-latest-version Requarks/wiki)
curl -sL https://github.com/Requarks/wiki/archive/$ver.tar.gz | tar zxvf - wiki-$ver/dev/helm --strip-components 2
mv helm wiki

# longhorn
# TODO need to improve
# repo=longhorn/longhorn
# ver=$(github-latest-version $repo)
# chart=longhorn
# # seaweedfs use version
# [[ ! -e $chart/Chart.yaml || $ver != $(yq r $chart/Chart.yaml appVersion) ]] && {
#   rm -rf $chart
#   mkdir -p $chart
#   curl -sL https://github.com/longhorn/longhorn/archive/$ver.tar.gz | tar zxvf - -C longhorn --wildcards "*/chart" --strip-components 2
# } || echo git chart $chart unchanged

# longhorn
rm -rf longhorn; mkdir -p longhorn
ver=$(github-latest-version longhorn/longhorn)
curl -sL https://github.com/longhorn/longhorn/archive/$ver.tar.gz | tar zxvf - -C longhorn longhorn-${ver##v}/chart --strip-components 2


# openebs
sync-chart openebs https://openebs.github.io/charts


# build packages
# ===================
rm -f message
mkdir -p dist
for chart in */Chart.yaml; do
  git add $chart
  # 可能本地修改，只希望构建
  # nochange
  # git diff --quiet --staged master -- $chart && {
  #   continue
  # }

  name=$(dirname $chart)
  ver=$(yq r $chart 'version')
  # 版本 tgz 存在 - 恢复修改的 chart
  # 存在有高版本的时候还拉取到低版本
  [ -e charts/$name-$ver.tgz ] && {
    git checkout $name
    continue
  }

  # compre version
  lastVer=$(grep $name CHANGELOG.md | tail -n 1 | cut -d '|' -s -f 3 | egrep -o '\S+' || true)

  # 版本不存在
  [ ! -e charts/$name-$ver.tgz ] && {
    echo "$name $lastVer -> $ver"
    echo -n "update $name $lastVer -> $ver ." >> message
    helm package -d dist $name
  }
done
rsync -av --ignore-existing --include '*.tgz' dist/ charts/

## build doc
./scripts/build-doc

# dist is empty there no package change
# index will cause index.yaml change
if [ ! -z "$(ls -A ./dist)" ]; then
  helm repo index charts
fi

rsync -a public/ charts/
cp README.md charts/
git status
