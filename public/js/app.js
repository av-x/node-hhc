'use strict';

// Declare app level module which depends on filters, and services

angular.module('hhc', [
  'hhc.controllers',
  'hhc.filters',
  'hhc.services',
  'hhc.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/view1', {
      templateUrl: 'partials/partial1',
      controller: 'MyCtrl1'
    }).
    when('/view2', {
      templateUrl: 'partials/partial2',
      controller: 'MyCtrl2'
    }).
    otherwise({
      redirectTo: '/view1'
    });

  $locationProvider.html5Mode(true);
});
