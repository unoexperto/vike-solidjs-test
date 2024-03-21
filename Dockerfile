# this file doesn't build the code itself
FROM nginx:1.25.4-alpine
WORKDIR /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY dist/client .
