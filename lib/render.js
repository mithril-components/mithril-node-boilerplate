'use strict'

/**
* Render Mithril components to HTML
*/

/* Required */
const fs     = require('fs');
const render = require('mithril-node-render');

const sample = require('../mithril_components/sample');
const asyncsample = require('../mithril_components/asyncsample');


/* HTML template, keep it in memory */
const html = fs.readFileSync('public/template.html', 'utf8');

/* Replace %CONTENT% with generate HTML from Mithril components */
const base = (inner) => {
    return html.replace(/%CONTENT%/g, inner);
}

/* Render sample component */
const renderSample = (name) => {
    // Model object
    const params = {
        name: name
    };

    const ctrl = sample.controller(params);
    const view = sample.view(ctrl);
    const html = render(view);
    return base(html);
}

const renderAsyncSample = () => {
    return asyncsample.controller().then(ctrl => {
        const view = asyncsample.view(ctrl);
        const html = render(view);
        return base(html);
    });
}

module.exports = {
    sample: renderSample,
    asyncsample: renderAsyncSample
}