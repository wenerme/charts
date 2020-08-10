#!/bin/bash
set -ex

helm repo update

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

helm repo add kubernetes-dashboard https://kubernetes.github.io/dashboard/
rm -rf kubernetes-dashboard
helm pull --untar kubernetes-dashboard/kubernetes-dashboard

# build packages
mkdir -p dist
for chart in */Chart.yaml; do
  name=$(dirname $chart)
  ver=$(yq r $chart 'version')
  [ ! -e charts/$name-$ver.tgz ] && {
    helm package -d dist $name
  }
done
rsync -av --ignore-existing --include '*.tgz' dist/ charts/

## build doc

# preprare
# command -v yq > /dev/null || pip install yq
# stage changed
git add -u

echo "## Charts"  > LIST.md
echo "Name | Version | AppVersion"  >> LIST.md
echo "-----|---------|-----------"  >> LIST.md

for chart in */Chart.yaml; do
  name=$(dirname $chart)

  mkdir -p charts/$name
  cp $name/README.md charts/$name

  echo "$(yq r $chart 'name') | $(yq r $chart 'version') | $(yq r $chart 'appVersion')" >> LIST.md

  # changed
  git diff --quiet --staged master -- $name || {
    echo "$(yq r $chart 'name') | $(yq r $chart 'version') | $(yq r $chart 'appVersion') | $(date +"%Y-%m-%d %H:%M:%S")" >> CHANGELOG.md
  }
done

cat README.raw.md LIST.md > README.md


# dist is empty there no package change
# index will cause index.yaml change
if [ ! -z "$(ls -A ./dist)" ]; then
  helm repo index charts
fi

rsync -a public/ charts/
cp README.md charts/
git status
