'use strict'

import fs from 'fs';
import render from 'mithril-node-render';
import template from './template';
import {extend} from './util';

export default (generated, params) => {
    return generated.then(g => {
        const html = render(g.map(item => item.view));
        const resources = g.map(item => item.resources);
        //total.content = html;
        return template.apply({
            resources: extend(resources, params),
            html: html
        });
    });
}