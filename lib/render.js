'use strict'

import fs from 'fs';
import render from 'mithril-node-render';
import template from './template';
import {extend} from './util';

export default (generated, params) => {
    return generated.then(g => {
        const html = render(g.map(item => item.view));
        const resources = g.reduce((a, b) => {
            return {resources: a.resources.concat(b.resources)}
        }, {resources: []});

        return template({
            resources: resources,
            html: html
        });
    });
}