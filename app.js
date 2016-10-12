#!/usr/bin/env node
'use strict'

import express from 'express';
import generator from './lib/generator';
import render from './lib/render';
import {extend, isMobile} from './lib/util';
import pages from './lib/pages';
import config from './config';

const router = express.Router();

// components page handler
const pageHandler = (page) => {
   return (req, res, next) => {
      const ua = req.get('User-Agent');
      /** params generate **/
      const params = extend(
          {
              contextPath: req.protocol + '://' + req.headers.host,
              requestUrl: '//' + req.headers.host + config.context_path + req.url,
              isMobile: isMobile(ua)
          },
          req.query,
          req.params
      );
      const generated_components = generator(page.components, params);
      render({components: generated_components, params: params, layout: page.layout}).then(html => {
          return res.type('html').send(html);
      })
      .catch(err => {
          console.trace(err);
          res.status(500).json(err);
      });
   };
}

// add pages
pages.forEach(page => {
    [].concat(page.path).forEach(path => router.get(config.context_path + path, pageHandler(page)));
});

/* Start express */
const app = express();

/* Register route on root */
app.use('/', router);
/* Static resources like, css, images */
app.use(express.static(__dirname + '/public'));

// Handle 404
app.use((req, res, next) => {
    res.status(404);
    pageHandler({
        components: [
            {name: '404'}
        ]
    })(req, res, next);
});

// Use 'export PORT=???' to change the port
const port = process.env.PORT || 8080;
const host = process.env.HOST || '127.0.0.1';
app.listen(port, host, () => console.log(`Listening on ${port} ...`));
