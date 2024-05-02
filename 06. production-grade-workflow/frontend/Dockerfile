FROM alpine:3.18 as builder
ENV NODE_VERSION 21.7.3
# Update apk repository and install nodejs and npm
RUN apk update && \
  apk add --no-cache nodejs npm
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . . 
RUN npm run build

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html