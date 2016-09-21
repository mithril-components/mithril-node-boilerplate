'use strict'

import http from 'http'
import render from 'mithril-node-render'
import component2 from './component2'

const params = {};

const handleRequest = (request, response) => {
    response.end('["Item1", "Item2"]');
}

//Create a server
const server = http.createServer(handleRequest);

//Lets start our server
server.listen(7070, () => {
    component2.controller(params).then(ctrl => {
        const view = component2.view(ctrl);
        const html = render(view);

        console.log(html);

        server.close();
    })
    .catch(e => console.log(e));

});