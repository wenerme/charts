
ci:
	npm add -g pnpm
	pnpm i
	rm -f message sync.json
	./mirrorer sync --verbose
	cat sync.json
	./mirrorer commit
	./mirrorer manifest
	cp README.md charts
	git add -u .
	git --no-pager diff --staged
	@echo ========== charts ==========
	cd charts && git add .
	cd charts && git --no-pager diff --staged
	touch message

ls:
	./mirrorer ls
sync:
	./mirrorer sync
doctor:
	./mirrorer doctor
