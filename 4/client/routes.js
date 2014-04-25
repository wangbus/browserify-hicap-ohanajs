var fs = require('fs');

module.exports = function($routeProvider) {
  $routeProvider.when('/', {
    controller: require('./main.js'),
    template: fs.readFileSync(__dirname + '/main.html')
  });

  $routeProvider.when('/omg', {
    controller: require('./omg.js'),
    template: fs.readFileSync(__dirname + '/omg.html')
  });
}

