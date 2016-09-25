#!/usr/bin/env node
'use strict'

import express from 'express';
import generator from './lib/generator';
import render from './lib/render';
import {extend, isMobile} from './lib/util';

const router = express.Router();

const pages = {
    '/component1': {
        components: [
            {name: 'component1'}
        ]
    },
    '/component2': {
            components: [
                {name: 'component2'}
            ]
        },
    '/component1and2': {
        components: [
            {name: 'component1'},
            {name: 'component2'}
        ]
    },
    '/component3/:dynamic': {
        components: [
            {name: 'component3', params: {static: 'value'}}
        ]
    }
}

// components page handler
for (let p in pages) {
    router.get(p, (req, res, next) => {
        const ua = req.get('User-Agent');
        /** params generate **/
        const params = extend(
            {
                contextPath: req.protocol + '://' + req.headers.host,
                isMobile: isMobile(ua)
            },
            req.query,
            req.params
        );
        const generated = generator(pages[p].components, params);
        render(generated, params).then(html => {
            return res.type('html').send(html);
        })
        .catch(err => {
            console.trace(err);
            res.status(500).json(err);
        });
    });
}

/* Start express */
const app = express();

/* Register route on root */
app.use('/', router);
/* Static resources like, css, images */
app.use(express.static(__dirname + '/public'));

// Default HTTP port is 9004
const port = process.env.PORT || 8080;
const host = process.env.HOST || '127.0.0.1';
app.listen(port, host, () => console.log(`Listening on ${port} ...`));
