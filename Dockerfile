FROM node:22-alpine
WORKDIR /app
COPY package*.json yarn.lock ./
RUN yarn install --frozen-lockfile && yarn cache clean
RUN npm i -g serve
COPY . . 
RUN yarn build
EXPOSE 3000
CMD [ "serve","-s","dist"]