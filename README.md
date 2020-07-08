# Helm Charts

```bash
helm repo add wener https://wenerme.github.io/charts
helm search repo wener/
```

## Mirror charts
Collect a lot offcial charts for easy to find and use in one repo.

* Auto update based on Github Action

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
longhorn | 1.0.0 | v1.0.0
traefik | 8.8.1 | 2.2.1
vault | 0.6.0 | 1.4.2
