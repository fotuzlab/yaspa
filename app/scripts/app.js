'use strict';

var yaspaApp = angular.module('yaspaApp', ['ui'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'YaspaAbout'
      })
      .when('/page/:page', {
        templateUrl: 'views/footer.html',
        controller: 'YaspaFooter'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

