'use strict'

import m from 'mithril';
import render from 'mithril-node-render';

export default (layout, htmls) => {
    let html = '';
    if (params.layout == 'simple') {
        return `<div class='container'>${params.htmls.join('')}</div>`;
        // or m('.container', htmls.map(h => m.trust(h)));
    }

    return params.htmls.join('');
}