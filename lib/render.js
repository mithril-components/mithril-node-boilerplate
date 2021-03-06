'use strict'

import fs from 'fs';
import render from 'mithril-node-render';
import template from './template';
import {extend} from './util';

/**
* Render the components list to HTML!
*/
export default (params) => {
    return params.components.then(c => {
        const resources = c.reduce((a, b) => {
            return {resources: a.resources.concat(b.resources)}
        }, {resources: []});

        return template(extend(
            params,
            {htmls: c.map(item => render(item.view))},
            resources
        ));
    });
}