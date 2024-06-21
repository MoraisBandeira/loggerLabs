# Use uma imagem base do Node.js
FROM node:20

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /

# Copie os arquivos package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do aplicativo
RUN npm install

# Copie o restante dos arquivos do aplicativo para o diretório de trabalho
COPY . .

# Exponha a porta em que o aplicativo será executado
EXPOSE 3000

# Comando para executar o aplicativo quando o contêiner for iniciado
CMD ["node", "server.js"]
