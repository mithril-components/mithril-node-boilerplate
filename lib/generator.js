'use strict'

import {extend} from './util';
import fs from 'fs';
import path from 'path';

/** List all the plugins within this project */
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

const loaded_components = listComponents();

export default (components, params) => {
    components = [].concat(components); // to array

    // Create components
    const componentInstances = components.map(i => {
        if (typeof loaded_components[i.name] == 'undefined') {
            throw "'" + i.name + "' component did not find";
        }
        return new loaded_components[i.name]()
    });

    // Create controllers
    const controllers = componentInstances.map((component, i) => {
        return component.controller(extend({}, params, components[i].params));
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