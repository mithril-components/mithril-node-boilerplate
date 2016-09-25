'use strict'

import {extend} from './util';
import fs from 'fs';
import path from 'path';

export const listComponents = () => {
    const components = {};
    const component = require(__dirname + '/../components/component')['default'];
    fs.readdirSync(__dirname + '/../components').filter(file => {
        const klass = require(__dirname + `/../components/${file}`)['default'];
        if (klass.prototype instanceof component) {
            components[file.substring(0, file.length - 3)] = klass;
        }
    });
    return components;
}

const components = listComponents();

export default (items, params) => {
    const instances = {};
    items.map(i => {
        if (typeof components[i.name] == 'undefined') {
            throw "'" + i.name + "' component did not find";
        }
        instances[i.name] = {
            component: new components[i.name](),
            params: i.params
        };
    });

    const controllers = items.map(i => {
        const p = extend({}, params, instances[i.name].params);
        return instances[i.name].component.controller(p);
    });

    return Promise.all(controllers).then(ctrls => {
        return items.map((item, i) => {
            return {
                view: instances[item.name].component.view(ctrls[i]),
                resources: instances[item.name].component.resources(ctrls[i])
            }
        });
    });
}