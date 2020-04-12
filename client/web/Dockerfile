FROM node:12-alpine

RUN mkdir -p /web/app
WORKDIR /web/app

COPY package.json /web/app/

RUN npm install

CMD [ "npm", "run", "dev" ]