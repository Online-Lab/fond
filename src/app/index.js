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
  'fond.contacts',
  'fond.projects',
  'fond.tasks',
  'fond.regulatory-base',
  'fond.archive-changes',
  'fond.changes-statutes',
  'fond.changes-regulations',
  'fond.certificate',
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

      .state('contacts', {
        url: '/contacts',
        templateUrl: 'app/contacts/contacts.html',
        controller: 'ContactsCtrl'
      })

      .state('projects', {
        url: '/projects',
        templateUrl: 'app/projects/projects.html',
        controller: 'ProjectsCtrl'
      })

      .state('tasks', {
        url: '/tasks',
        templateUrl: 'app/tasks/tasks.html',
        controller: 'TasksCtrl'
      })

      .state('regulatory-base', {
        url: '/regulatory-base',
        templateUrl: 'app/regulatory-base/regulatory-base.html',
        controller: 'Regulatory-baseCtrl'
      })
      
      .state('archive-changes', {
        url: '/archive-changes',
        templateUrl: 'app/archive-changes/archive-changes.html',
        controller: 'Archive-changesCtrl'
      })

      .state('changes-statutes', {
        url: '/changes-statutes',
        templateUrl: 'app/changes-statutes/changes-statutes.html',
        controller: 'Changes-statutesCtrl'
      })

      .state('changes-regulations', {
        url: '/changes-regulations',
        templateUrl: 'app/changes-regulations/changes-regulations.html',
        controller: 'Changes-regulationsCtrl'
      })

      .state('certificate', {
        url: '/certificate',
        templateUrl: 'app/certificate/certificate.html',
        controller: 'CertificateCtrl'
      })

      ;

    $urlRouterProvider.otherwise('/');
  })



.run(function($rootScope){
  $rootScope.$on('$stateChangeSuccess', function() {
     document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
})

.controller('AppCtrl',  function(){

})
;
