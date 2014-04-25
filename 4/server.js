var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res){
  var path = 'index.html';
  return res.sendfile(path, {root: './public'});
});
app.listen(PORT);
console.log('Listening on port '  + PORT);

