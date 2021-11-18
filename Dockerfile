
FROM node:12-alpine as build-step

WORKDIR /app

COPY .  .




FROM nginx:1.17.1-alpine

WORKDIR /app

COPY --from=build-step /app/dist/sparkweb  /usr/share/nginx/html


