FROM node:19.4.0

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm", "test"]
