var fs = require('fs');
// envify
if (process.env.NODE_ENV === 'development') {
  console.log('Development Mode AKA DERP MODE.');
}

// brfs
var html = fs.readFileSync(__dirname + '/wat.html', 'utf8');
console.log(html);

// hbsfy
var Handlebars = require('hbsfy/runtime');
var template = require("./template.hbs");
html = template({ place: 'HI Capacity' });
console.log(html);
