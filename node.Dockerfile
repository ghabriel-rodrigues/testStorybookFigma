ARG IMAGE_VERSION=no-default-please
FROM node:${IMAGE_VERSION}-alpine

RUN apk add --no-cache --update make bash git openssh openssh-client aws-cli

USER node
RUN mkdir /home/node/app
WORKDIR /home/node/app

ENV NPM_CONFIG_LOGLEVEL info
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin

RUN mkdir -p ~/.ssh
RUN ssh-keyscan github.com >> ~/.ssh/known_hosts
RUN git config --global user.email "no-reply@gupy.com.br"
RUN git config --global user.name "package-publisher"
