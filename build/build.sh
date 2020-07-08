#!/bin/bash

# update mirror
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
rm -rf ingress-nginx
helm pull --untar ingress-nginx/ingress-nginx

# build packages
mkdir -p dist
for chart in */Chart.yaml; do
  name=$(dirname $chart)
  helm package -d dist $name

  mkdir -p charts/$name
  cp $name/README.md charts/$name
done
rsync -av --ignore-existing --include '*.tgz' dist/ charts/
