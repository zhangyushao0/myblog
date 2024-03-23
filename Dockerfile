FROM node
WORKDIR /app
RUN git clone https://github.com/zhangyushao0/myblog.git --depth=1
WORKDIR /app/myblog
RUN npm install
ENV HOST=0.0.0.0 PORT=8000
RUN npm run build
CMD ["node", "build"]

