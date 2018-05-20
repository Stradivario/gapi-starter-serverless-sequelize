FROM node:8.9.4

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

RUN npm install -g pm2-docker ts-node typescript pm2@2.10.2 @gapi/cli jest

COPY package.json package.json

RUN npm install

ENV NODE_ENV=production  

COPY . .

CMD [ "gapi", "start", "--prod", "--docker" ]