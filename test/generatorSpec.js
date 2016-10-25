'use strict'

import generator, {listComponents} from '../lib/generator';
import chai from 'chai';

const expect = chai.expect;

describe("generator", () => {
    it("list components", () => {
        expect(Object.keys(listComponents())).to.eql(['404', 'component1', 'component2', 'component3']);
    });
    it("check component list", (done) => {
        const componentList = [
            {
                name: 'component1'
            }
        ];

        generator(componentList).then(d => {
            done();
        });
    });
});