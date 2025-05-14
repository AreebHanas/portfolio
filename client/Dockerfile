FROM node:18-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

# COPY ./ssl/cert.pem /etc/nginx/ssl/cert.pem

# COPY ./ssl/key.pem /etc/nginx/ssl/key.pem

RUN npm run build

EXPOSE 443
EXPOSE 80