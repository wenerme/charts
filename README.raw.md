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

