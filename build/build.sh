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

# build packages
mkdir -p dist
for chart in */Chart.yaml; do
  name=$(dirname $chart)
  helm package -d dist $name

  mkdir -p charts/$name
  cp $name/README.md charts/$name
done
rsync -av --ignore-existing --include '*.tgz' dist/ charts/
