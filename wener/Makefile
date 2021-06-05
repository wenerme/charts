

build: update
	../scripts/build-repo -c charts -a dist -o ../charts/wener

update: always
	curl -sL https://github.com/wenerme/kube-stub-cluster/archive/refs/heads/main.tar.gz | tar zxvf - kube-stub-cluster-main/charts --strip-components 1
	git add charts

.PHONY: always
always:

clean:
	rm -rf dist
