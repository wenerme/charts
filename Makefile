
ci:
	rm -f message sync.json
	./cmd/mirrorer/main.ts sync --verbose
	./cmd/mirrorer/main.ts commit
	./cmd/mirrorer/main.ts manifest
	cp README.md charts
	git add -u .
	git --no-pager diff --staged
	@echo ========== charts ==========
	cd charts && git add .
	cd charts && git --no-pager diff --staged
	touch message

ls:
	./cmd/mirrorer/main.ts ls
sync:
	./cmd/mirrorer/main.ts sync
doctor:
	./cmd/mirrorer/main.ts doctor
