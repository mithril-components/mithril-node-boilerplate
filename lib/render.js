'use strict'

import fs from 'fs';
import render from 'mithril-node-render';
import template from './template';
import {extend} from './util';

/**
* Render the components list to HTML!
*/
export default (components) => {
    return components.then(c => {
        const html = render(c.map(item => item.view));
        const resources = c.reduce((a, b) => {
            return {resources: a.resources.concat(b.resources)}
        }, {resources: []});

        return template({
            resources: resources,
            html: html
        });
    });
}