FROM node
MAINTAINER Hamed Abdollahpour <ha.hamed@gmail.com>

# Setup nodejs packages
ADD package.json ./
RUN npm install
# HTMLs and bower
ADD public public
RUN npm -g install bower
RUN cd public/ && bower install --allow-root && cd -

# Congigurations and code
ADD app.js config.js ./
ADD translations translations
ADD mithril_components mithril_components

ENV LANG EN

EXPOSE 8080
ENTRYPOINT ["node", "app.js"]