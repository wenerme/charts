build: update package

.PHONY: update
update:
	mkdir -p charts
	../scripts/sync-chart -w charts cadence https://kubernetes-charts.banzaicloud.com
package:
	../scripts/build-repo -c charts -a dist -o ../charts/banzai

clean:
	rm -rf dist
