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
  'fond.news-page',
  'fond.reporting',
  'fond.download',
  'fond.application',
	'fond.ask-question',
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

      .state('news-page', {
        url: '/news-page',
        templateUrl: 'app/news-page/news-page.html',
        controller: 'NewsPageCtrl'
      })

      .state('download', {
        url: '/download',
        templateUrl: 'app/download/download.html',
        controller: 'DownloadCtrl'
      })

      .state('application', {
        url: '/application',
        templateUrl: 'app/application/application.html',
        controller: 'ApplicationCtrl'
      })

      .state('ask-question', {
        url: '/ask-question',
        templateUrl: 'app/ask-question/ask-question.html',
        controller: 'AskQuestionCtrl'
      })

      ;

    $urlRouterProvider.otherwise('/');
  })




.controller('AppCtrl',  function(){
  
})
;
