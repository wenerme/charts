
build:
	sh ./scripts/build.sh
	touch message

scripts/sync.sh: scripts/gen.ts sources.yaml
	deno run --allow-write --allow-read scripts/gen.ts

gen: scripts/sync.sh

sync: README.md gen
	bash scripts/sync.sh

repo.md: gen
README.md: repo.md scripts/sync-readme.sh
	bash scripts/sync-readme.sh

ls:
	./cmd/mirrorer/main.ts ls
