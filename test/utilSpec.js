'use strict'

import render from 'mithril-node-render';
import {extend2Array} from '../lib/util';
import chai from 'chai';

const expect = chai.expect;

describe("check utils", () => {
    it("extend2Array", () => {
        const array = extend2Array(
            {item1: "test1"},
            {item1: "test2"},
            {item2: "test3"}
        );
        console.log(array);
    });
});