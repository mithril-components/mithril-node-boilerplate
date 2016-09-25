'use strict'

import generator, {listComponents} from '../lib/generator';
import chai from 'chai';

const expect = chai.expect;

describe("check components", () => {
    it("list components", () => {
        console.log(listComponents());
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