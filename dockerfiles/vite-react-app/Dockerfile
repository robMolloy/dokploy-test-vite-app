
# ---- Build stage ----
FROM node:22-alpine AS build

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

# Vite configuration (supplied by Dokploy as a build argument)
ARG VITE_BASE_PATH
RUN echo "VITE_BASE_PATH=[$VITE_BASE_PATH]" 
ENV VITE_BASE_PATH=${VITE_BASE_PATH}

RUN pnpm run build

# ---- Serve stage ----
FROM node:22-alpine

WORKDIR /app

RUN npm install -g serve

COPY --from=build /app/dist ./dist

USER node

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
