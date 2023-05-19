FROM node:18
WORKDIR /app

COPY ./package*.json ./
RUN yarn global add concurrently
RUN yarn
COPY . .
EXPOSE 5500
CMD [ "yarn", "dev" ]
