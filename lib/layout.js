'use strict'

import m from 'mithril';
import render from 'mithril-node-render';

export default (layout, htmls) => {
    let html = '';
    if (layout == 'simple') {
        return `<div class='container'>${htmls.join('')}</div>`;
        // or m('.container', htmls.map(h => m.trust(h)));
    }

    return htmls.join('');
}