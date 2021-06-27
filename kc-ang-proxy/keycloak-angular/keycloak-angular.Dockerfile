FROM node:14.17.0-alpine AS builder

WORKDIR /opt/web

COPY package.json package-lock.json ./
RUN npm install

ENV PATH="./node_modules/.bin:$PATH"

COPY . ./

# RUN ng build --prod
RUN ng build

COPY ./nginx /opt/nginx-config/

FROM nginx:1.17-alpine

COPY --from=builder /opt/nginx-config/nginx-dev.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /opt/web/dist/keycloak-angular-sample /usr/share/nginx/html