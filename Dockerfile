FROM node:6.7
MAINTAINER Hamed Abdollahpour <ha.hamed@gmail.com>

WORKDIR /opt

ADD components components
ADD lib lib
ADD public public
ADD .babelrc app.js config.js package.json ./
RUN npm install
RUN export PATH=$PATH:./node_modules/.bin
RUN cd public/ && bower install --allow-root && cd -

#EXPOSE 8080
#ENTRYPOINT ["npm", "start"]
