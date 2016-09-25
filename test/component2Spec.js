'use strict'

import render from 'mithril-node-render';
import Component2 from '../components/component2';
import chai from 'chai';

const expect = chai.expect;

const component = new Component2();

// Mock rest API
component.load = () => {
    return Promise.resolve(["Item1", "Item2"]);
}

describe("component2", () => {
    it("test view", (done) => {
        component.controller().then(ctrl => {
            const view = component.view(ctrl);
            const html = render(view);

            expect(html).to.equal("<ul><li>Item1</li><li>Item2</li></ul>");

            done();
        });
    });
});