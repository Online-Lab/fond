'use strict';

angular.module('fond', ['ngAnimate', 
	'ngCookies', 
	'ngTouch', 
	'ngSanitize', 
	'ngResource', 
	'ui.router',
  'fond.home',
  'fond.news',
  'fond.news-detail',
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
  'fond.advantages',
  'fond.guarantee',
  'fond.obtaining-loan',
  'fond.support-buisness',
  'fond.bank-advantages',
  'fond.bank-partnership',
  'fond.limits-guarantees',
  'components'
])


  .run(
    ['$rootScope', '$state', '$stateParams',
      function ($rootScope,   $state,   $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
      }
    ]
  )

  .factory('utils', function(){
    return {
      findById: function findById(a, id){
        for(var i = 0; i<a.length; i++){
          if(a[i].id == id) return a[i];
        }
        return null;
      }
    };
  })



  .factory('newsList', ['$http', 'utils', function ($http, utils){
    var path = 'db.json',
        newsList = $http.get(path)
                        .then(function (resp){
                          return resp.data.news;
                        });
    var factory = {};
    factory.all = function(){
      return newsList;
    };

    factory.get = function(id){
      return newsList.then(function(){
        return utils.findById(newsList, id);
      })
    };

    return factory;
  }])




  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state('home', {
        url: '/',
        templateUrl: 'app/home/home.html',
        resolve:{
          newsList: ['newsList',
            function(newsList){
              return newsList.all();
            }
          ]
        },
        controller: 'HomeCtrl'
      })

      .state('reporting', {
        url: '/reporting',
        templateUrl: 'app/news-detail/news-detail.html',
        controller: 'ReportingCtrl'
      })

      .state('news', {
        url: '/news',
        views: {
          '':{
            templateUrl: 'app/news/news.html',
            resolve:{
              newsList: ['newsList',
                function(newsList){
                  return newsList.all();
                }
              ]
            },
            controller: 'NewsCtrl'
          }
        }
        
      })

      .state('news-detail', {
        url: '/news/{nId:[0-9]}',
        templateUrl: 'app/news-detail/news-detail.html',
        resolve:{
              newsList: ['newsList',
                function(newsList){
                  return newsList.all();
                }
              ]
            },
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

      .state('advantages', {
        url: '/advantages',
        templateUrl: 'app/advantages/advantages.html',
        controller: 'AdvantagesCtrl'
      })

      .state('guarantee', {
        url: '/guarantee',
        templateUrl: 'app/guarantee/guarantee.html',
        controller: 'GuaranteeCtrl'
      })

      .state('obtaining-loan', {
        url: '/obtaining-loan',
        templateUrl: 'app/obtaining-loan/obtaining-loan.html',
        controller: 'Obtaining-loanCtrl'
      })

      .state('support-buisness', {
        url: '/support-buisness',
        templateUrl: 'app/support-buisness/support-buisness.html',
        controller: 'Support-buisnessCtrl'
      })

      .state('bank-advantages', {
        url: '/bank-advantages',
        templateUrl: 'app/bank-advantages/bank-advantages.html',
        controller: 'Bank-advantagesCtrl'
      })

      .state('bank-partnership', {
        url: '/bank-partnership',
        templateUrl: 'app/bank-partnership/bank-partnership.html',
        controller: 'bank-partnershipCtrl'
      })

      .state('limits-guarantees', {
        url: '/limits-guarantees',
        templateUrl: 'app/limits-guarantees/limits-guarantees.html',
        controller: 'limits-guaranteesCtrl'
      })

      ;

    $urlRouterProvider.otherwise('/');
  })



  .run(function($rootScope){
    $rootScope.$on('$stateChangeSuccess', function() {
       document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
  })


  .controller('AppCtrl',  function($scope, newsList){
    $scope.news = newsList;
  })



;
