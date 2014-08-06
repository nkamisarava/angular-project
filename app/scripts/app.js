'use strict';

/**
 * @ngdoc overview
 * @name angularProjectApp
 * @description
 * # angularProjectApp
 *
 * Main module of the application.
 */
var app = angular
    .module('angularProjectApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider
//      .when('/', {
//        templateUrl: 'views/main.html',
//        controller: 'MainCtrl'
//      })
//      .when('/about', {
//        templateUrl: '../views/posts.html',
//        controller: 'AboutCtrl'
//      })
            .when('/', {
                templateUrl: '../views/posts.html'
                //controller: 'postCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
