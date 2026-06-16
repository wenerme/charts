ci:
	bun install --frozen-lockfile
	rm -f message sync.json
	bun run sync --verbose
	cat sync.json
	bun run commit:sync
	bun run manifest
	cp README.md charts
	git add -u .
	git --no-pager diff --staged
	@echo ========== charts ==========
	cd charts && git add .
	cd charts && git --no-pager diff --staged
	touch message

ls:
	bun run mirrorer -- ls
sync:
	bun run sync
doctor:
	bun run doctor

typecheck:
	bun run typecheck
