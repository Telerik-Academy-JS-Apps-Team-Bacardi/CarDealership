'use strict';

var app = angular
    .module('carDealApp', ['ngResource', 'ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'views/home.html'
            })
            .otherwise({redirectTo: '/home'});
    })