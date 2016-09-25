This project is a very simple boilerplate using NodeJS + Mithril to generate static pages for your application front-end.

Why mithril-node-components
===========================
It's simple, fast and pure javascript solution. You can easily make components, use it infinite time.
It's very easy to test each component separately and build a giant system.
Mithril-node-component project does not need to learn any extra syntax, just teach you how to use MVC with great ES6 features to manage large scale projects.

Getting started
===============

You need to setup NodeJS 6.4.0+, then:

    npm install

Install bower if you don't have it already:

    sudo npm install -g bower
    
then:

    cd public && bower install && cd -


Test
====
This project uses [Mocha] and [Chai] for tests. You can simple run the test by:

    npm test


Run
===
Simple run it with node:

    npm start
    
You can see pages on [http://localhost:8080/component1]() or [http://localhost:8080/component1and2]()
Use `PORT` and `HOST` environment variable to check port of interface. Ex in Linux:

    export PORT=8000
    export HOST=192.168.0.1
    npm start


How to use it?
==============

1:‌ Fork it
----------
The best strategy is to fork the project to have changes in future for free by rebasing your repo.


2: Play with it
---------------
Run 

Add component
-------------
Component is smallest piece of **mithril-node-components** projects. It follows MVC pattern with little bit enhancement for ES6.
It has everything by itself. Logic, resource management and UI. You use the components in any part of the project (or even in the other projects) without any special setup.

Each complement should inherit from components class and has three methods:

* controller: It takes `params` as parameter. `params` contains:
  * request query params
  * static params you defined in components json object.
  * contextPath
  * isMobile: Check if it's inside of mobile browser
  * Custom hack params which added to **components page handler** in `app.js` file.
  
  controller always return a promise. If you load any async resources you can easily make it as promise:
  
      controller(params) {
         return new Promise((resolve, reject) => {
             http.get('http://SOME/REST/API', (res) => {
                 let body = '';
  
                 res.on('data', (chunk) => {
                     body += chunk;
                 });
  
                 res.on('end', () => {
                     resolve(JSON.parse(body));
                 });
  
             }).on('error', function(e){
                 reject(e);
             });
         });
     }


Add page
--------

Add stylesheet
--------------

Add extra!
----------

Tips
====



ECMAScript 6 compatibility
--------------------------
NodeJS (yet) does not support ES6 completely. We use Babel to compile down to NodeJS features.
It will remove after NodeJS fully support all the ES6 aspects.


[Bootstrap]: http://getbootstrap.com "Bootstrap is the most popular HTML, CSS, and JS framework"
[Less]: http://lesscss.org
[Chai]: http://chaijs.com/
[Mocha]: https://mochajs.org