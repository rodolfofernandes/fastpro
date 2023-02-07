FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

RUN yaern add

COPY ./ ./

CMD [ "YARN", "START" ]