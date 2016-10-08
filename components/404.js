'use strict'

import m from 'mithril';
import Component from './component';

export default class extends Component {

    controller(params) { // q
        return Promise.resolve(params);
    }

    view(ctrl) {
        return m('.container.text-center', [
            m('p', {style: 'font-size: 6em'}, '\u00a0'), // space
            m('h1', {style: 'font-size: 8em'}, '404'),
            m('h1', "We couldn't find the page.."),
            m('.row',
                m('.col-md-6.col-md-offset-3.col-xs-8.col-xs-offset-2',
                    m('p', 'Sorry, but the page you are looking for was either not found or does not exist. Try refreshing the page or click the button below to go back to the Homepage.'),
                )
            ),
            m('a.btn.btn-default', {href: '/'}, 'Go back to Homepage')
        ]);
    }

    resources(ctrl) {
        return [];
    }

}