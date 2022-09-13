
DEFAULT_NODE_VERSION  := 16.13.1
DEFAULT_PY_VERSION    := 3.7.4
AWS_ACCESS_KEY_ID     := ${AWS_ACCESS_KEY_ID}
AWS_SECRET_ACCESS_KEY := ${AWS_SECRET_ACCESS_KEY}
REPOSITORY_TYPE       := node

ifeq (${REPOSITORY_TYPE},null)
REPOSITORY_TYPE       := node
IMAGE_VERSION         := ${DEFAULT_NODE_VERSION}
endif

DEFAULT_VERSION       := $(if $(filter node,$(REPOSITORY_TYPE)),$(DEFAULT_NODE_VERSION),$(DEFAULT_PY_VERSION))
IMAGE_VERSION         := $(if ${IMAGE_VERSION},${IMAGE_VERSION},$(DEFAULT_VERSION))


ifeq (${IMAGE_VERSION}, null)
IMAGE_VERSION         := ${DEFAULT_VERSION}
endif

RELEASE_TYPE          := ${RELEASE_TYPE}
RELEASE_CHANGES       := ${RELEASE_CHANGES}
CURRENT_DIR           = $(shell pwd)
DOCKERFILE            := ${REPOSITORY_TYPE}.Dockerfile
DOCKERIMAGE           := ${REPOSITORY_TYPE}-package-publisher

$(info Dockerfile to use: ${DOCKERFILE})
$(info Image name to generate: ${DOCKERIMAGE}:${IMAGE_VERSION})

build:
	docker build --build-arg IMAGE_VERSION=${IMAGE_VERSION} -f ${DOCKERFILE} ./repository -t "${DOCKERIMAGE}:${IMAGE_VERSION}"

publish-package:
	@docker run \
		--volume "${CURRENT_DIR}/repository:/home/${REPOSITORY_TYPE}/app" \
		--volume $$SSH_AUTH_SOCK:/ssh-agent \
		--mount type=bind,source=${CURRENT_DIR}/${REPOSITORY_TYPE}-publisher.sh,target=/publisher.sh,readonly \
		-e "SSH_AUTH_SOCK=/ssh-agent" \
		-e "AWS_ACCESS_KEY_ID=$${AWS_ACCESS_KEY_ID}" \
		-e "AWS_SECRET_ACCESS_KEY=$${AWS_SECRET_ACCESS_KEY}" \
		-e "RELEASE_TYPE=$${RELEASE_TYPE}" \
		-e "RELEASE_CHANGES=$${RELEASE_CHANGES}" \
		--rm ${DOCKERIMAGE}:${IMAGE_VERSION} \
		bash /publisher.sh

ifndef GIT_BRANCH
	GIT_BRANCH := $(shell git rev-parse --abbrev-ref HEAD)
endif

build-storybook:
	npm ci --quiet
	npm run tokens
	npm run build:storybook

release:
	npm ci --quiet
	npm run build:rollup

ifeq ($(findstring pre,$(VERSION_KEYWORD)),pre)
	npm run pre-release \
		--preid="$(GIT_BRANCH)" \
		--version_keyword="$(VERSION_KEYWORD)" \
		--release_changes="$(RELEASE_CHANGES)" \
		--registry="$(NPM_REGISTRY)"
else
	npm run release \
		--version_keyword="$(VERSION_KEYWORD)" \
		--release_changes="$(RELEASE_CHANGES)" \
		--registry="$(NPM_REGISTRY)"
endif
