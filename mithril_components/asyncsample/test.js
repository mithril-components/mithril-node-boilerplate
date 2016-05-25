'use strict'

/**
* Required packages for running test.
*/
const fs     = require('fs');
const render  = require('mithril-node-render')
const express = require('express');

/* The module itself */
const asyncsample   = require('./asyncsample');

/* Mocking HTTP API and run the server */
const model = {city: 'Beijing', country: 'China'};
const app  = express();
app.get('/some/url', (req, res) => res.status(200).json(model));
app.listen(7000);

/* Create the controller */
asyncsample.controller().then(ctrl => {
    /* Pass the controller to view */
    const view = asyncsample.view(ctrl);
    
    /* Generate the HTML */
    const innerHtml = render(view);

    /* Print rendered HTML to console */
    console.log(innerHtml);

    process.exit(0);
})
.catch(err => {
    console.trace(err);
});
