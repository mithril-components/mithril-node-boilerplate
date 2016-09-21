'use strict'

import m from 'mithril'
import component1 from '../component1/component1'
import component2 from '../component2/component2'
import {extend} from '../../lib/util';

const controller = (params) => {
    const component1Ctrl = component1.controller(params);
    const component2Ctrl = component2.controller(params);

    return Promise.all([component1Ctrl, component2Ctrl]).then(ctrls => {
        return extend(params, {
            component1Ctrl: ctrls[0],
            component2Ctrl: ctrls[1],
        });
    });
}

const view = (ctrl) => {
    return [
        component1.view(ctrl.component1Ctrl),
        component2.view(ctrl.component2Ctrl),
        m('p', 'static: ' + ctrl.static),
        m('p', 'dynamic: ' + ctrl.dynamic)
    ];
}

const resources = (ctrl) => []
    .concat(ctrl.component1Ctrl)
    .concat(ctrl.component2Ctrl)
    .concat(
        {
            title: "Component3's page"
        }
    );

export default {
    controller: controller,
    view: view,
    resources: resources
}
