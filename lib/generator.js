'use strict'

import {extend} from './util';
import fs from 'fs';
import path from 'path';

const components = {};
fs.readdirSync('mithril_components').filter(function(file) {
    components[file] = require(`../mithril_components/${file}/${file}`)['default'];
});

export default (items, params) => {
    const controllers = items.map(item => {
        const p = extend(params, item.params);
        return components[item.name].controller(p);
    });
    return Promise.all(controllers).then(ctrls => {
        return items.map((item, i) => {
            return {
                view: components[item.name].view(ctrls[i]),
                resources: components[item.name].resources(ctrls[i])
            }
        });
    });
}