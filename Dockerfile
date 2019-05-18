FROM node:8.16.0-alpine
WORKDIR /data
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "npm", "start" ]