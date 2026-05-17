FROM node:22-slim AS build

WORKDIR /app

COPY package*.json .
# COPY package.json package-lock.json ./
RUN npm ci

COPY . .

RUN npm run build

FROM nginx:stable-alpine AS deploy

# Here I add the nginx.conf file to dont expose the backend just the frontend
# and access to the api through the url /api/
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY  --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]