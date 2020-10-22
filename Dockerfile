FROM node:12.19.0
WORKDIR /app
COPY . /app
RUN apt-get update && npm install
ENTRYPOINT ["bash", "./entrypoint.sh"]