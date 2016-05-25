'use strict'

/**
* Required packages for running test.
*/
const fs     = require('fs');
const render = require('mithril-node-render');

/* The component(s) we want */
const page   = require('./sample');

/* Sample model object */
const model = {
    name: 'Hamed'
}

/* Create the controller */
const ctrl = page.controller(model);

/* Pass the controller to view */
const view = page.view(ctrl);

/* Generate the HTML */
const innerHtml = render(view);

/* Print rendered HTML to console */
console.log(innerHtml);