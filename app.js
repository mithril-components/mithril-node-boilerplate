#!/usr/bin/env node
'use strict'

/** HTTP server using ExpressJS */

/* Required stuffs */
const express = require('express');
const render  = require('./lib/render');

/* Express Router to handle REST11 */
const router = express.Router();

/* sample page. We get required name parameter from URL */
router.get('/sample/:name', (req, res, next) => {
    const name = req.params.name; // part of the URL

    const html = render.sample(name);
    res.type('html').send(html);
});

/* You can not run this method when you don't have actual rest server to feed data */
router.get('/asyncsample', (req, res, next) => {
    console.log('here');
    render.asyncsample().then(html => {
        res.type('html').send(html);
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

/* Start express */
const app = express();

/* Register route on root */
app.use('/', router);
/* Static resources like, css, images */
app.use(express.static(__dirname + '/public'));

// Default HTTP port is 9004
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on ${port} ...`));
