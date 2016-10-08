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
    const componentInstances = items.map(i => {
        if (typeof components[i.name] == 'undefined') {
            throw "'" + i.name + "' component did not find";
        }
        return new components[i.name]()
    });

    const controllers = componentInstances.map((component, i) => {
        return component.controller(extend({}, params, items[i].params));
    });

    return Promise.all(controllers).then(ctrls => {
        return ctrls.map((ctrl, i) => {
            return {
                view: componentInstances[i].view(ctrl),
                resources: componentInstances[i].resources(ctrl)
            }
        });
    });
}