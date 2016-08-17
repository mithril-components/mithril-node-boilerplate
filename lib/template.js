'use strict'

const config = require('../config');

const apply = (t) => {

    const description = t.description ? t.description : '';
    const keywords = t.keywords ? [].concat(t.keywords).join(',') : '';
    const site_name = config.site_name ? config.site_name : '';
    const title = t.title ? t.title : '';
    const content = t.content ? t.content : '';

    let scripts = '';
    if (t.script) {
        [].concat(t.script).filter((item, pos, array) => array.indexOf(item) == pos).forEach(script => {
            if (script) {
                scripts += `<script type="text/javascript" src="${script}"></script>\n`;
            }
        });
    }

    if (t.inline && t.inline.script) {
        scripts += '<script>\n';
        [].concat(t.inline.script).forEach(inlineScript => {
            if (inlineScript) {
                scripts += inlineScript + '\n';
            }
        });
        scripts += '</script>\n';
    }

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

    <link href="/module.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>
<body role="document">
    ${content}

    <script src="/bower_components/jquery/dist/jquery.min.js"></script>
    <script src="/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
    ${scripts}
</body>`;
}

module.exports = {
    apply: apply
}