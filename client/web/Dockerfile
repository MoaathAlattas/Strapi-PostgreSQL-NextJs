FROM node:12-alpine

RUN mkdir -p /client/web
WORKDIR /client/web

COPY package.json /client/web/

RUN npm install

CMD [ "npm", "run", "dev" ]