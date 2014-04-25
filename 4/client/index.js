require('angular/angular');
require('angular-route/angular-route');
require('angular-sanitize/angular-sanitize');

angular.module('app', ['ngRoute', 'ngSanitize'])
  .config(require('./routes'));

