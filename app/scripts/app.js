'use strict';

/**
 * @ngdoc overview
 * @name angularProjectApp
 * @description
 * # angularProjectApp
 *
 * Main module of the application.
 */
var app = angular.module('angularProjectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                /*templateUrl: 'views/main.html',
                controller: 'MainCtrl'*/
                templateUrl: 'views/post.html',
                controller: 'ModalDemoCtrl'
            })
//            .when('/post', {
//                templateUrl: 'views/post.html',
//                controller: 'ModalDemoCtrl'
//            })
            .otherwise({
                redirectTo: '/'
            });
    });