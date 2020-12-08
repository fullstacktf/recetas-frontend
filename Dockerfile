FROM node:12.19.0 AS build
WORKDIR /app
COPY . /app
RUN apt-get update && \
  npm install
RUN apt-get clean && \
  rm -rf /var/lib/apt/list/*
RUN npm run build

FROM nginx:1.19.5
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]
