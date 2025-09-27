# Etapa 1: build
FROM node:20-alpine AS builder
WORKDIR /app

# Instalar dependências do sistema necessárias para Prisma
RUN apk add --no-cache openssl

COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Etapa 2: runtime
FROM node:20-alpine AS production
WORKDIR /app

RUN apk add --no-cache openssl

# Copiar apenas o necessário para produção
COPY package*.json ./
RUN npm ci --omit=dev

COPY --from=builder /app/dist ./dist
COPY prisma ./prisma

# Prisma precisa do client gerado
RUN npx prisma generate

# Porta padrão do Nest
EXPOSE 3000

CMD ["node", "dist/main.js"]