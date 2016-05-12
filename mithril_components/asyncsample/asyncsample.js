'use strict'

/* Required packages */
const m = require('mithril');
const Localize = require('localize');
const request  = require('request');

const config = require('../config');

/* Use system language as default language */
const t = new Localize('./translations');
t.setLocale(process.env.LANG.split(/[\._]/)[0]);

/* Load the model data with REST */
/* Create JSON from request */
const sample = () => {   // {city, country}

    /* Set request headers */
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    };

    /* Configure the request */
    const options = {
        url: `${config.rest_server}/some/url`,
        headers: headers,
        method: 'GET'
    };

    /* Promise to handle asynchronous request */
    return new Promise((resolve, reject) => {
        request(options, function (err, response, body) {
            /* Handle errors */
            if (err) {
                reject(err);
            }
            /* Handle HTTP 200 */
            else if (response.statusCode != 200) {
                reject({
                    status: response.statusCode,
                    body: body
                });
            }
            /* If there are no errors, parse the JSON */
            else {
                resolve(JSON.parse(body));
            }
        });
    });
}

/* Create controller */
const controller = () => { // {name}
    return sample();
}

/* Create view */
const view = (ctrl) => {
    return [
        /* Render */
    	m('p', t.translate('City') + ': ' + ctrl.city),
    	m('p', t.translate('Country') + ': ' + ctrl.country)
    ];
}

/* Export it to use in the other modules */
module.exports = {
    controller: controller,
    view: view
}
