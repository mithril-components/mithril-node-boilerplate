'use strict'

import render from 'mithril-node-render'
import component1 from './component1'

const params = {};

component1.controller(params).then(ctrl => {
    const view = component1.view(ctrl);
    const html = render(view);

    console.log(html);
});