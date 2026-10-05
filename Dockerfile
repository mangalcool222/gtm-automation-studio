# Stage 1: Build React Web App
FROM node:20-alpine AS builder

WORKDIR /app

# Copy web-app package files and install dependencies
COPY web-app/package*.json ./
RUN npm ci

# Copy web-app source code and build production bundle
COPY web-app/ .
RUN npm run build

# Stage 2: Serve static production assets with NGINX
FROM nginx:alpine

# Copy built dist files to NGINX root
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy NGINX configuration for SPA routing
COPY web-app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
