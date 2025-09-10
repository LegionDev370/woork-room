FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json yarn.lock ./
RUN npm install yarn -g
RUN yarn install
COPY . . 
RUN yarn build

FROM node:22-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
RUN npm install yarn -g
RUN yarn install --production --frozen-lockfile && yarn cache clean
COPY . .
CMD [ "yarn","preview","--host","0.0.0.0"]