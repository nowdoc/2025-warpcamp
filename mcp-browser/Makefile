include .env.dist
-include .env
export

DOCKER_DEFAULT_PLATFORM = ${DOCKER_PLATFORM}

.PHONY: install
install:
	npm install
	npx playwright install

.PHONY: test-playwright
test-playwright:
	npx playwright test

.PHONY: test-stagehand
test-stagehand:
	node stagehand/index.ts

.PHONY: docker-up
docker-up:
	docker compose up
