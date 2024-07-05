FROM node:18-alpine

RUN apk update && apk upgrade && apk add --no-cache openssl

WORKDIR /src

COPY package.json package-lock.json ./

RUN npm install

COPY public/ public/
COPY src/ src/
COPY tailwind.config.js ./

RUN npm run build

RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "build"]
