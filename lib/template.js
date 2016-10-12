'use strict'

import config from '../config';
import {extend, extend2Array} from './util';
import fs from 'fs';

export default function(params) {
    const t = extend(
        {script_src: [], script: [], css_src: [], css: []}, // empty - defaults
        extend2Array.apply(this, params.resources)
    );

    const description = (typeof t.description != 'undefined') ? new Set(t.description).join(' - ') : '';
    const keywords = (typeof t.keyword != 'undefined') ? new Set(t.keyword ).join(', ') : '';
    const site_name = (typeof config.site_name != 'undefined') ? config.site_name : '';
    const title = (typeof t.title != 'undefined') ? t.title : '';

    // Apply different layout
    let html = '';
    if (params.layout == 'simple') {
        html = `<div class='container'>${params.htmls.join('')}</div>`;
    }
    else {
        html = params.htmls.join('');
    }

    const script_src = t.script_src.reduce((a, b) => `${a ? a : ''}<script type="text/javascript" src="${b}"></script>\n`, '');
    const script = t.script.reduce((a, b) => `${a ? a : ''}<script>${b}</script>\n`, '');
    const css_src = t.css_src.reduce((a, b) => `${a ? a : ''}<link rel="stylesheet" href="${b}"/>\n`, '');
    const css = t.css.reduce((a, b) => `${a ? a : ''}<style>${b}</style>\n`, '');

return `<!DOCTYPE html>
<html lang="fa" class="no-js">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="description" content="${description}">
    <meta name="keywords" content="${keywords}">
    <meta name="author" content="Hamed Abdollahpour">
    <link rel="icon" href="/favicon.ico">
    <link rel="search" type="application/opensearchdescription+xml" title="${site_name}" href="/opensearch.xml" />

    <title>${title} - ${site_name}</title>

    <link href="/bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="/bower_components/fontawesome/css/font-awesome.min.css" rel="stylesheet">
    <link href="/style.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>
<body role="document">
    ${html}

<script src="/bower_components/jquery/dist/jquery.min.js"></script>
<script src="/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
${script_src}
${script}

</body>`;
}