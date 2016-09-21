'use strict'

import m from 'mithril'

const controller = (params) => {
    return Promise.resolve({
        params: params,
        msg: 'This is test'
    });
}

const view = (ctrl) => {
    return m('p', ctrl.msg);
}

const resources = (ctrl) => []

export default {
    controller: controller,
    view: view,
    resources: resources
}
