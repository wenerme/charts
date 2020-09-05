#!/bin/bash
set -ex

# https://stackoverflow.com/a/4024263/1870054
verlte() {
    [  "$1" = "`echo -e "$1\n$2" | sort -V | head -n1`" ]
}

verlt() {
    [ "$1" = "$2" ] && return 1 || verlte $1 $2
}

# update mirror
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
rm -rf ingress-nginx
helm pull --untar ingress-nginx/ingress-nginx

helm repo add incubator https://kubernetes-charts-incubator.storage.googleapis.com
rm -rf haproxy-ingress
helm pull --untar incubator/haproxy-ingress

helm repo add jetstack https://charts.jetstack.io
rm -rf cert-manager
helm pull --untar jetstack/cert-manager

helm repo add traefik https://containous.github.io/traefik-helm-chart
rm -rf traefik
helm pull --untar traefik/traefik

helm repo add hashicorp https://helm.releases.hashicorp.com
rm -rf consul
helm pull --untar hashicorp/consul

rm -rf vault
helm pull --untar hashicorp/vault


helm repo add bitnami https://charts.bitnami.com/bitnami
rm -rf redis
helm pull --untar bitnami/redis
rm -rf metallb
helm pull --untar bitnami/metallb
rm -rf kube-prometheus
helm pull --untar bitnami/kube-prometheus

helm repo add kubernetes-dashboard https://kubernetes.github.io/dashboard/
rm -rf kubernetes-dashboard
helm pull --untar kubernetes-dashboard/kubernetes-dashboard

helm repo add harbor https://helm.goharbor.io
rm -rf harbor
helm pull --untar harbor/harbor

helm repo add datawire https://www.getambassador.io
rm -rf ambassador
helm pull --untar datawire/ambassador

# linkerd
helm repo add linkerd https://helm.linkerd.io/stable
rm -rf linkerd2
helm pull --untar linkerd/linkerd2
rm -rf linkerd2-cni
helm pull --untar linkerd/linkerd2-cni

# minio
helm repo add minio https://helm.min.io/
rm -rf minio
helm pull --untar minio/minio

# build packages
rm -f message
mkdir -p dist
for chart in */Chart.yaml; do
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
