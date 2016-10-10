FROM node
MAINTAINER Hamed Abdollahpour <ha.hamed@gmail.com>

RUN npm install -g mithril-component-tools
ADD ./ ./
RUN mct publish publish/ en
RUN cd public/ && bower install --allow-root && cd -

WORKDIR publish

EXPOSE 8080
ENTRYPOINT ["npm", "start"]
