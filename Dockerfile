FROM quay.io/invision/docker-alpine-kubernetes-nodejs:0.10.41

WORKDIR /var/src

COPY .npmrc package.json ./
RUN npm install

COPY . .
