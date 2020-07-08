#!/bin/bash

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

# build packages
mkdir -p dist
for chart in */Chart.yaml; do
  name=$(dirname $chart)
  helm package -d dist $name
done
rsync -av --ignore-existing --include '*.tgz' dist/ charts/

## build doc

# preprare
command -v yq > /dev/null || pip install yq

echo "## Charts"  > LIST.md
echo "Name | Version | AppVersion"  >> LIST.md
echo "-----|---------|-----------"  >> LIST.md

for chart in */Chart.yaml; do
  name=$(dirname $chart)

  mkdir -p charts/$name
  cp $name/README.md charts/$name

  echo "$(yq r $chart 'name') | $(yq r $chart 'version') | $(yq r $chart 'appVersion')" >> LIST.md
done

cat README.raw.md LIST.md > README.md
