'use strict';

/**
 * This is the main js file.
 * All the routing is defined here.
 */
var yaspaApp = angular.module('yaspaApp', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'YaspaAbout'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'YaspaAbout'
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

