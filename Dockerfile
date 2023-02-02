FROM node:16.16

RUN apt-get update

# 1. development packages
RUN apt-get install -y \
    git \
    zip \
    curl \
    sudo \
    unzip \
    libicu-dev \
    libbz2-dev \
    libpng-dev \
    libjpeg-dev \
    libmcrypt-dev \
    libreadline-dev \
    libfreetype6-dev \
    libonig-dev \
    libzip-dev \
    g++


ARG NODE_ENV
ENV NODE_ENV $NODE_ENV


RUN npm i --save
RUN npm i --save-dev

EXPOSE 3000
CMD ["npm", "start"]
