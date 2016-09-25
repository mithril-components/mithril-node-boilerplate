'use strict'

import render from 'mithril-node-render';
import Component3 from '../components/component3';
import chai from 'chai';

const expect = chai.expect;

const component = new Component3();

// Mock rest API
component.component2.load = () => {
    return Promise.resolve(["Item1", "Item2"]);
}

describe("component3", () => {
    it("test view", (done) => {
        component.controller().then(ctrl => {
            const view = component.view(ctrl);
            const html = render(view);

            console.log(html);

            done();
        })
        .catch(err => {
            console.log(err);
        });
    });
});