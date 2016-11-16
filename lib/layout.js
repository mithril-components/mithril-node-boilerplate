'use strict'

import m from 'mithril';
import render from 'mithril-node-render';

export default (layout, htmls) => {
    let html = '';
    if (layout == 'simple') {
        return `<div class='container'>${htmls.join('')}</div>`;
        // or m('.container', htmls.map(h => m.trust(h)));
    } else if (layout == 'double-top') {
        return `<div class='container'>
            ${htmls.slice(0, 1).join('')}
            <div class="row">
                <div class="col-md-6">${htmls.slice(1, 2).join('')}</div>
                <div class="col-md-6">${htmls.slice(2, 3).join('')}</div>
            </div>
            ${htmls.slice(3).join('')}
        </div>`;
    }

    return htmls.join('');
}
