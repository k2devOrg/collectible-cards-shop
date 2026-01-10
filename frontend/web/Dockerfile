# ===== STAGE 1: BUILD =====
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

# produkcyjny build (defaultConfiguration = production)
RUN npm run build


# ===== STAGE 2: NGINX =====
FROM nginx:1.25-alpine

# usuwamy domyślną konfigurację
RUN rm /etc/nginx/conf.d/default.conf

# konfiguracja Angular routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# !!! KLUCZOWA ŚCIEŻKA !!!
COPY --from=build /app/dist/collectible-cards-shop/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
