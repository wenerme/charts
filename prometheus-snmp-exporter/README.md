# Prometheus SNMP Exporter

An Prometheus exporter that exposes information gathered from SNMP.

This chart creates a [SNMP Exporter](https://github.com/prometheus/snmp_exporter) deployment on a [Kubernetes](http://kubernetes.io) cluster using the [Helm](https://helm.sh) package manager.

## Prerequisites

- Kubernetes 1.8+ with Beta APIs enabled

## Get Repo Info

```console
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update
```

_See [helm repo](https://helm.sh/docs/helm/helm_repo/) for command documentation._

## Install Chart

```console
# Helm 3
$ helm install [RELEASE_NAME] prometheus-community/prometheus-snmp-exporter

# Helm 2
$ helm install --name [RELEASE_NAME] prometheus-community/prometheus-snmp-exporter
```

_See [configuration](#configuration) below._

_See [helm install](https://helm.sh/docs/helm/helm_install/) for command documentation._

## Uninstall Chart

```console
# Helm 3
$ helm uninstall [RELEASE_NAME]

# Helm 2
# helm delete --purge [RELEASE_NAME]
```

This removes all the Kubernetes components associated with the chart and deletes the release.

_See [helm uninstall](https://helm.sh/docs/helm/helm_uninstall/) for command documentation._

## Upgrading Chart

```console
# Helm 3 or 2
$ helm upgrade [RELEASE_NAME] [CHART] --install
```

_See [helm upgrade](https://helm.sh/docs/helm/helm_upgrade/) for command documentation._

## Configuration

See [Customizing the Chart Before Installing](https://helm.sh/docs/intro/using_helm/#customizing-the-chart-before-installing). To see all configurable options with detailed comments, visit the chart's [values.yaml](./values.yaml), or run these configuration commands:

```console
# Helm 2
$ helm inspect values prometheus-community/prometheus-snmp-exporter

# Helm 3
$ helm show values prometheus-community/prometheus-snmp-exporter
```

See [prometheus/snmp_exporter/README.md](https://github.com/prometheus/snmp_exporter/) for further information.

### Prometheus Configuration

The snmp exporter needs to be passed the address as a parameter, this can be done with relabelling.

Example config:

```yaml
scrape_configs:
  - job_name: 'snmp'
    static_configs:
      - targets:
        - 192.168.1.2  # SNMP device.
    metrics_path: /snmp
    params:
      module: [if_mib]
    relabel_configs:
      - source_labels: [__address__]
        target_label: __param_target
      - source_labels: [__param_target]
        target_label: instance
      - target_label: __address__
        replacement: my-service-name:9116  # The SNMP exporter's Service name and port.
```

Eaxample configuration via a ServiceMonitor
```yaml
serviceMonitor:
  enabled: true
  relabelings:
    - sourceLabels: [__param_target]
      targetLabel: instance
  params:
    enabled: true
    conf:
      module:
        - fortigate_snmp
      target:
        - 192.168.1.2 # SNMP device
```
