var jsdom = require("jsdom").jsdom,
    fs = require('fs'),
    html = '<html><head></head><body><div><span id="a">hoge</span></div></body></html>',
    document = jsdom(html),
    window = document.createWindow(),
    jqueryUrl = 'https://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js';
 
jsdom.jQueryify(window, jqueryUrl, function (window, $) {
    console.log($('#a').text()); // hogeが出力される
});