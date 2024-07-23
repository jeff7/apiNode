# Usar a imagem oficial do Node.js
FROM node:16-alpine

# Definir o diretório de trabalho
WORKDIR /usr/src/app

# Copiar arquivos de dependências e instalá-las
COPY package*.json ./
RUN npm install

# Copiar o restante dos arquivos
COPY . .

# Expor a porta que o app vai rodar
EXPOSE 3000

# Comando para rodar o app
CMD ["npm", "start"]
