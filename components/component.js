'use strict'

/**
* Extend from this class to create new components.
* This needs to implement three methods: controller, view and resources. constructor can not have parameters too.
*/
export default class {

    constructor() {
        if (arguments.length > 0) {
            throw new TypeError('Constructor can not have parameters');
        }
        if (this.controller === undefined) {
            throw new TypeError('Must implement controller method');
        }
        if (this.view === undefined) {
            throw new TypeError('Must implement view method');
        }
        if (this.resources === undefined) {
            throw new TypeError('Must implement resources method');
        }
    }

    /* Minimum requirement */
    /*
    controller(params) {
        return Promise.resolve({});
    }

    view(ctrl) {
        return '';
    }

    resources(ctrl) {
        return [];
    }
    */

}