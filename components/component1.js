'use strict'

import m from 'mithril';
import Component from './component';

export default class extends Component {

    controller(params) {
        /* Controller always returns Promise even for static data */
        return Promise.resolve({
            /**
            * It's good to have params in view too.
            * For example we can use isMobile to render it different for different type of devices.
            */
            params: params,
            msg: 'This is just an example'
        });
    }

    view(ctrl) {
        /* Say hello to bootstrap */
        return m('div.container',
            m('row',
                m('div.col-md-4.col-md-offset-4',
                    m('p.text-center.bg-primary', ctrl.msg)
                )
            )
        );
    }

    resources(ctrl) {
        /* If it does not have any resources, just returns empty */
        return [];
    }

}