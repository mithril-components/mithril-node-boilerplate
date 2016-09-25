'use strict'

import render from 'mithril-node-render';
import Component1 from '../components/component1';
import chai from 'chai';

const expect = chai.expect;

const component = new Component1();

describe("component1", () => {
    it("test view", (done) => {
        const params = {};

        component.controller(params).then(ctrl => {
            const view = component.view(ctrl);
            const html = render(view);

            expect(html).to.equal("<p>This is test</p>");

            done();
        })
        .catch(err => {
            console.log(err);
        });
    });
});