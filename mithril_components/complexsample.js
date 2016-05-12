'use strict'

/* Required packages */
const m = require('mithril');
const Localize = require('localize');

/* Required local files */
const sample = require('./sample');
const asyncsample = require('./asyncsample');


/* Use system language as default language */
const t = new Localize('./translations');
t.setLocale(process.env.LANG.split(/[\._]/)[0]);

/**
* Create controller.
*/
const controller = (listData) => { // {name}

    /* two controller instances from the previous sample */
    const p1 = asyncsample.controller();
    const p2 = asyncsample.controller();

    /* Promise to handle asynchronous request */
    return Promise.all([p1, p1]).then(ctrls => {
        /* Combine data lists from previous samples */
        return {
            title: 'List of samples',
            /* Get controller data from 'sample.js' */
            sampleCtrls: listData.map(data => sample.controller(data)),
            /* Get controller data from (both) 'asyncsample.js' */
            asyncsampleCtrls: ctrls // p1 + p2
        }
    });
}

/**
* Render view HTML.
*/
const view = (ctrl) => {
    return [
        /* Render */
        m('h1', ctrl.title),
        ctrl.sampleCtrls.map(ctrl => sample.view(ctrl)),
        ctrl.asyncsampleCtrls.map(ctrl => asyncsample.view(ctrl))
    ]
}

/**
* Export it to use in the other modules.
*/
module.exports = {
    controller: controller,
    view: view
}
