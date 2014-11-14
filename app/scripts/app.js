'use strict';

/**
 * @ngdoc overview
 * @name pinchHitterApp
 * @description
 * # pinchHitterApp
 *
 * Main module of the application.
 */
angular
  .module('pinchHitterApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .state('ph', {
        url: '',
        views: {
          '': {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          }
        }
      })
      .state('ph.root', {
        url: '/',
        views: {
          'header@ph': {
            templateUrl: 'views/header.html',
          },
          'main@ph': {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
          }
        }
      })
      .state('ph.root.offense', {
        url: 'offense',
        views: {
          'main@ph': {
            templateUrl: 'views/offense.html',
            controller: 'OffenseCtrl'
          }
        }
      })
      .state('ph.root.defense', {
        url: 'defense',
        views: {
          'main@ph': {
            templateUrl: 'views/defense.html',
            controller: 'DefenseCtrl'
          }
        }
      });
  });
