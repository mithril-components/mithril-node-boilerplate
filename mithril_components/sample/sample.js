'use strict'

/**
* This component is very simple static component which get the data model from outside on controller.
* Mostly we use this component by static data or as part of another component.
*/

/* Required packages */
const m = require('mithril');
const Localize = require('localize');

/* Use system language as default language */
const t = new Localize('./translations');
t.setLocale(process.env.LANG.split(/[\._]/)[0]);

/* Create controller */
const controller = (data) => { // {name}
    return {
        name: data.name
    }
}

/* Create view */
const view = (ctrl) => {
	/* Render */
    return m('p', t.translate('Name') + ': ' + ctrl.name);
}

/* Export it to use in the other modules */
module.exports = {
    controller: controller,
    view: view
}
