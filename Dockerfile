FROM node
WORKDIR /app
COPY . /app
WORKDIR /app/myblog
RUN npm install
ENV HOST=0.0.0.0 PORT=8000
RUN npm run build
CMD ["node", "build"]

