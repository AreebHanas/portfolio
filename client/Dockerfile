FROM node:18-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

COPY ./ssl/cert.pem /etc/nginx/ssl/cert.pem

COPY ./ssl/key.pem /etc/nginx/ssl/key.pem

RUN npm run build

FROM nginx:alpine

COPY --from=0 /app/build /usr/share/nginx/html

COPY --from=0 /etc/nginx/ssl/cert.pem /etc/nginx/ssl/cert.pem
COPY --from=0 /etc/nginx/ssl/key.pem /etc/nginx/ssl/key.pem

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 443
EXPOSE 80