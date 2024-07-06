FROM node:18-alpine

RUN apk update && apk upgrade && apk add --no-cache openssl

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 3000

CMD ["npm","start"]
