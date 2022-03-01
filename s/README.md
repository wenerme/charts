# Resources

```bash
# Test deploy
kubectl apply -f https://charts.wener.tech/s/whoami.deploy.yaml
# Delete
kubectl delete -f https://charts.wener.tech/s/whoami.deploy.yaml

# Test linkerd inject
linkerd inject https://charts.wener.tech/s/whoami.deploy.yaml | kubectl apply -f -
```
