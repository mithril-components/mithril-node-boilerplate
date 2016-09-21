'use strict'

/* Required packages */
import http from 'http'
import m from 'mithril'

const load = () => {
    return new Promise((resolve, reject) => {
        http.get('http://localhost:7070', (res) => {
            let body = '';

            res.on('data', (chunk) => {
                body += chunk;
            });

            res.on('end', () => {
                resolve(JSON.parse(body));
            });

        }).on('error', function(e){
              resolve(['Not rest API, please test it with real API']);
        });
    });
}

const controller = (params) => {
    return load().then(data => ({
        params: params,
        data: data
    }));
}

const view = (ctrl) => {
    return m('ul',
        ctrl.data.map(d => m('li', d))
    );
}

const resources = (ctrl) => {
    script: 'http://sample.com/some_js_file.js'
}

export default {
    controller: controller,
    view: view,
    resources: resources
}
