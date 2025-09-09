FROM node:22-alpine
WORKDIR /app
COPY package*.json yarn.lock ./
RUN npm install -g yarn
RUN yarn install --production --frozen-lockfile && yarn cache clean
COPY . . 
RUN yarn build
EXPOSE 3000
CMD [ "yarn","preview","--host","0.0.0.0"]