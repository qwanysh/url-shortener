FROM node:16

RUN useradd --create-home --home-dir /app --shell /bin/bash app
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm i

COPY . .
