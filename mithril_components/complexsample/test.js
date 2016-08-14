'use strict'

/**
* Required packages for running test.
*/
const fs     = require('fs');
const render  = require('mithril-node-render')
const express = require('express');

/* The module itself */
const complexsample = require('./complexsample');

/* Mocking HTTP API and run the server */
const app  = express();
app.get('/some/url', (req, res) => res.status(200).json({city: 'Beijing', country: 'China'}));
app.listen(7000);


/* Sample model object - Part of the data is from REST */
const model = [
    {name: 'Hamed'},
    {name: 'Jacob'}
]

/* Create the controller */
complexsample.controller(model).then(ctrl => {
    /* Pass the controller to view */
    const view = complexsample.view(ctrl);
    
    /* Generate the HTML */
    const innerHtml = render(view);

    /* Print rendered HTML to console */
    console.log(innerHtml);

    process.exit(0);
})
.catch(err => {
    console.trace(err);

    process.exit(0);
});