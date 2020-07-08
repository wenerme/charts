# Helm Charts

```bash
helm repo add wener https://wenerme.github.io/charts
helm search repo wener/
```

## Mirror charts
### WHY
* Official repo only contain one chart - hard to find
* Too many repos cause `helm repo update` slow
* GFW Friendly

## HOW
* Auto package based on Github Action
* Sync every 30min

## DEV

```bash
# Only clone charts
git clone --depth=1 --single-branch --branch gh-pages https://github.com/wenerme/charts charts
```

## Charts
Name | Version | AppVersion
-----|---------|-----------
alpine | 1.0.0 | 3.12.0
cert-manager | v0.15.2 | v0.15.2
consul | 0.22.0 | 1.8.0
haproxy-ingress | 0.0.27 | 0.7.2
ingress-nginx | 2.10.0 | 0.33.0
kubernetes-dashboard | 2.2.0 | 2.0.3
longhorn | 1.0.0 | v1.0.0
redis | 10.7.9 | 6.0.5
traefik | 8.8.1 | 2.2.1
vault | 0.6.0 | 1.4.2
