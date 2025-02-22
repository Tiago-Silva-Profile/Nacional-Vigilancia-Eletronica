
# -------><----------
# FROM node:20
# WORKDIR /app
# COPY . .
# RUN npm install
# RUN npm install @angular/cli -g
# EXPOSE 4200
# CMD [ "ng", "serve", "--host", "0.0.0.0" ]

# -------><----------
# FROM node:20 AS builder
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build --configuration=production

# FROM nginx:alpine
# COPY --from=builder /app/docs/browser usr/share/nginx/html
# COPY nginx.conf /etc/nginx/nginx.conf
# COPY mime.types /etc/nginx/mime.types
# EXPOSE 80
# CMD [ "nginx", "-g", "daemon off;"]


FROM node:20 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --configuration=production

FROM nginx:stable
COPY --from=builder /app/docs/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
COPY mime.types /etc/nginx/mime.types
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;"]
