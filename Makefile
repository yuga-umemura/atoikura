.PHONY: api
api:
	cd apps/api && set -a && source .env && set +a && go run ./cmd/api

.PHONY: tidy
tidy:
	cd apps/api && go mod tidy

.PHONY: fmt
fmt:
	cd apps/api && go fmt ./...

.PHONY: build
build:
	cd apps/api && go build ./...

.PHONY: proto
proto:
	@echo "proto generation will be added later"