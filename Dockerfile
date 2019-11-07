FROM node:10-alpine as build-stage
WORKDIR /app 

COPY package*.json ./
RUN npm install
COPY ./ /app/
RUN npm run build


FROM nginx:alpine as production-stage
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /app/build /app/build
WORKDIR /etc/nginx

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]