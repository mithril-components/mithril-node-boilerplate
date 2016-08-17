'use strict'

/**
* Render Mithril components to HTML
*/

/* Required */
const fs     = require('fs');
const render = require('mithril-node-render');

const template = require('./template');
const sample = require('../mithril_components/sample/sample');
const asyncsample = require('../mithril_components/asyncsample/asyncsample');


/* Render sample component */
const renderSample = (name) => {
    // Model object
    const params = {
        name: name
    };

    const ctrl = sample.controller(params);
    const view = sample.view(ctrl);
    const html = render(view);

    let resources = (typeof sample.resources == 'function') ? sample.resources(ctrl) : {}
    resources.title = `Sample`;
    resources.content = html;
    return template.apply(resources);
}

const renderAsyncSample = () => {
    return asyncsample.controller().then(ctrl => {
        const view = asyncsample.view(ctrl);
        const html = render(view);

        let resources = (typeof asyncsample.resources == 'function') ? asyncsample.resources(ctrl) : {}
        resources.title = `Asynchronous sample`;
        resources.content = html;
        return template.apply(resources);
    });
}

module.exports = {
    sample: renderSample,
    asyncsample: renderAsyncSample
}