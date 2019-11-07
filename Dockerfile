FROM node:10-alpine as build-stage
WORKDIR /app 

COPY package*.json ./
RUN npm install
COPY public public
COPY src src
RUN npm run build


FROM nginx:alpine as production-stage
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /app/dist /app/dist
WORKDIR /etc/nginx

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]