# Etapa 1: build
FROM node:22
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build

# Porta usada pelo Nest (default 3000)
EXPOSE 3000
CMD ["node", "dist/main"]