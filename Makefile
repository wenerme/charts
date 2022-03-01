
ci:
	./cmd/mirrorer/main.ts sync --verbose
	./cmd/mirrorer/main.ts commit
	cd charts && git add .
	git add -u .
	touch message

ls:
	./cmd/mirrorer/main.ts ls
sync:
	./cmd/mirrorer/main.ts sync
doctor:
	./cmd/mirrorer/main.ts doctor
