'use strict'

/**
* Required packages for running test.
*/
const fs     = require('fs');
const render  = require('mithril-node-render')
const express = require('express');

/* The module itself */
const complexsample = require('../mithril_components/complexsample');

/* Mocking HTTP API and run the server */
const app  = express();
app.get('/some/url', (req, res) => res.status(200).json({city: 'Beijing', country: 'China'}));
app.listen(9880, () => console.log('Test is running...'));


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

    /* Generate static page */
    const base = fs.readFileSync('public/template.html', 'UTF-8');
	fs.writeFileSync('public/index.html', base.replace('%CONTENT%', innerHtml), 'UTF-8');

    process.exit(0);
})
.catch(err => {
    console.log(err);
});