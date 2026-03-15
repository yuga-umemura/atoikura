PROTO_DIR := packages/proto

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

.PHONY: proto-format
proto-format:
	cd ${PROTO_DIR} && buf format -w

.PHONY: proto-lint
proto-lint:
	cd ${PROTO_DIR} && buf lint

.PHONY: proto-generate
proto-generate:
	cd ${PROTO_DIR} && buf generate

.PHONY: proto
proto: proto-format proto-lint proto-generate