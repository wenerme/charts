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

sync-chart ingress-nginx https://kubernetes.github.io/ingress-nginx

sync-chart haproxy-ingress https://kubernetes-charts-incubator.storage.googleapis.com

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

# build packages
rm -f message
mkdir -p dist
for chart in */Chart.yaml; do
  git add $chart
  # nochange
  git diff --quiet --staged master -- $chart && {
    continue
  }

  name=$(dirname $chart)
  ver=$(yq r $chart 'version')
  # # compre version
  lastVer=$(grep $name CHANGELOG.md | tail -n 1 | cut -d '|' -s -f 3 | egrep -o '\S+' || true)

  # 存在 - 恢复
  # 存在有高版本的时候还拉取到低版本
  [ -e charts/$name-$ver.tgz ] && {
    git checkout $name
  }
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
