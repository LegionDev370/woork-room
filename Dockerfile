FROM node:22-alpine
WORKDIR /app
RUN corepack enable
COPY package*.json yarn.lock ./
RUN npm install -g npm@11.6.0
RUN yarn install --frozen-lockfile && yarn cache clean
COPY . .
RUN yarn build
EXPOSE 4173
CMD [ "yarn","preview","--host","0.0.0.0"]