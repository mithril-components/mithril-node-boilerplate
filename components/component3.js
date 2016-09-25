'use strict'

import m from 'mithril';
import Component from './component';
import Component1 from './component1';
import Component2 from './component2';
import {extend} from '../lib/util';

export default class extends Component {

    constructor() {
        super();
        this.component1 = new Component1();
        this.component2 = new Component2();
    }

    controller(params) {
        const component1Ctrl = this.component1.controller(params);
        const component2Ctrl = this.component2.controller(params);
        return Promise.all([component1Ctrl, component2Ctrl]).then(ctrls => {
            return extend({}, params, {
                component1Ctrl: ctrls[0],
                component2Ctrl: ctrls[1],
            });
        });
    }

    view(ctrl) {
            console.log('ok4')

        return [
            this.component1.view(ctrl.component1Ctrl),
            this.component2.view(ctrl.component2Ctrl),
            m('p', 'static: ' + ctrl.static),
            m('p', 'dynamic: ' + ctrl.dynamic)
        ];
    }

    resources(ctrl) {
        return []
        .concat(this.component1.resources(ctrl.component1Ctrl))
        .concat(this.component2.resources(ctrl.component2Ctrl))
        .concat(
            {
                title: "Component3's page"
            }
        );
    }

}