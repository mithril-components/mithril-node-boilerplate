'use strict'

import http from 'http'
import render from 'mithril-node-render'
import component3 from './component3'

const params = {};

const handleRequest = (request, response) => {
    response.end('["Item1", "Item2"]');
}

//Create a server
const server = http.createServer(handleRequest);

//Lets start our server
server.listen(7070, () => {
    component3.controller(params).then(ctrl => {
        const view = component3.view(ctrl);
        const html = render(view);

        console.log(html);

        server.close();
    })
    .catch(e => console.log(e));

});