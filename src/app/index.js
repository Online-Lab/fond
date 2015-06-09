'use strict';

angular.module('fond', ['ngAnimate', 
	'ngCookies', 
	'ngTouch', 
	'ngSanitize', 
	'ngResource', 
	'ui.router', 
	'ngMaterial',
  'fond.home',
  'fond.news',
	'fond.reporting',
	'components'
])

  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state('home', {
        url: '/',
        templateUrl: 'app/home/home.html',
        controller: 'HomeCtrl'
      })

      .state('reporting', {
        url: '/reporting',
        templateUrl: 'app/reporting/reporting.html',
        controller: 'ReportingCtrl'
      })

      .state('news', {
        url: '/news',
        templateUrl: 'app/news/news.html',
        controller: 'NewsCtrl'
      })

      ;

    $urlRouterProvider.otherwise('/');
  })




.controller('AppCtrl',  function(){
  
})
;
