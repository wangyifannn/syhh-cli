FROM registry.cn-beijing.aliyuncs.com/shiyuehehu/nodegyp:latest as node
WORKDIR /app
COPY package.json /app
RUN npm i && npm cache clean --force
COPY . /app
RUN npm run build:stage
RUN chmod +x ossutil/ossutil64
RUN /app/ossutil/ossutil64 cp -r /app/dist oss:\/\/turing-public-read/source/'<%= options.dockerCpAddress %>' -f -u -c /app/ossutil/oss.cfg

FROM registry.cn-beijing.aliyuncs.com/shiyuehehu/nginx:stable-1.16.1
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=node /app/dist /usr/share/nginx/html
EXPOSE 8081
RUN chown nginx.nginx /usr/share/nginx/html -R


'ssssssssssssssss<%= options.dockerCpAddress %>'

<%_ if (options.envAlpha) { _%>
import './.env.alpha'
<%_ } _%>