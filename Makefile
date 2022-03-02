
ci:
	rm -f message sync.json
	./cmd/mirrorer/main.ts sync --verbose
	./cmd/mirrorer/main.ts commit
	./cmd/mirrorer/main.ts manifest
	cd charts && git add .
	git add -u .
	git diff --staged
	touch message

ls:
	./cmd/mirrorer/main.ts ls
sync:
	./cmd/mirrorer/main.ts sync
doctor:
	./cmd/mirrorer/main.ts doctor
