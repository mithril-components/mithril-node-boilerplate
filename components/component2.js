'use strict'

import http from 'http';
import m from 'mithril';
import Component from './component';

export default class extends Component {

    load() {
       return new Promise((resolve, reject) => {
           http.get('http://localhost:7070', (res) => {
               let body = '';

               res.on('data', (chunk) => {
                   body += chunk;
               });

               res.on('end', () => {
                   resolve(JSON.parse(body));
               });

           }).on('error', function(e){
                 resolve(['Not rest API, please test it with real API']);
           });
       });
   }

   controller(params) {
       return this.load().then(data => ({
           params: params,
           data: data
       }));
   }

   view(ctrl) {
       return m('ul',
           ctrl.data.map(d => m('li', d))
       );
   }

   resources(ctrl) {
       return [{
           script: 'http://sample.com/some_js_file.js'
       }];
   }

}
