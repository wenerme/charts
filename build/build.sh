#!/bin/bash

mkdir -p dist
for chart in */Chart.yaml; do
  name=$(dirname $chart)
  helm package -u -d dist $name

  mkdir -p charts/$name
  cp $name/README.md charts/$name
done
rsync -av --ignore-existing --include '*.tgz' dist/ charts/
