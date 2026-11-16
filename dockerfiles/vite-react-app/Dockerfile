# ---- Build stage ----
FROM node:22-alpine AS build
WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

# Vite inlines VITE_* vars at build time
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

RUN pnpm run build

# ---- Serve stage ----
FROM node:22-alpine
WORKDIR /app

RUN npm install -g serve

COPY --from=build /app/dist ./dist

USER node
EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]