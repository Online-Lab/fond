'use strict';

angular.module('fond', ['ngAnimate', 
	'ngCookies', 
	'ngTouch', 
	'ngSanitize', 
	'ngResource', 
	'ui.router', 
	'ngMaterial',
	'fond.home',
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


      ;

    $urlRouterProvider.otherwise('/');
  })




.controller('AppCtrl',  function(){

})
;
