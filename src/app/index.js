'use strict';

angular.module('fond', ['ngAnimate', 
	'ngCookies', 
	'ngTouch', 
	'ngSanitize', 
	'ngResource', 
  'ncy-angular-breadcrumb',
	'ui.router',
  'angularUtils.directives.dirPagination',
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



  .factory('getJson', ['$http', 'utils', function ($http, utils){
    var path = 'db.json',
        getJson = $http.get(path)
                        .then(function (resp){
                          return resp.data;
                        });
    var factory = {};
    factory.all = function(){
      return getJson;
    };

    factory.get = function(id){
      return getJson.then(function(){
        return utils.findById(getJson, id);
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
          getJson: ['getJson',
            function(getJson){
              return getJson.all();
            }
          ]
        },
        controller: 'HomeCtrl',
        ncyBreadcrumb: {
          label: ' Главная'
        }
      })

      .state('reporting', {
        url: '/reporting',
        templateUrl: 'app/reporting/reporting.html',
        controller: 'ReportingCtrl',
        ncyBreadcrumb: {
          parent: 'home',
          label: ' Отчет'
        }
      })

      .state('news', {
        url: '/news',
        templateUrl: 'app/news/news.html',
        resolve:{
          getJson: ['getJson',
            function(getJson){
              return getJson.all();
            }
          ]
        },
        controller: 'NewsCtrl',
        ncyBreadcrumb: {
          parent: 'home',
          label: 'Новости'
        }
      })

      .state('news-detail', {
        url: '/news/{nId:[0-9]}',
        templateUrl: 'app/news-detail/news-detail.html',
        resolve:{
          getJson: ['getJson',
            function(getJson){
              return getJson.all();
            }
          ]
        },
        ncyBreadcrumb: {
          parent: 'news',
          label: '{{n.desc}}'
        },
        controller: 'NewsPageCtrl'
      })

      .state('download', {
        url: '/download',
        templateUrl: 'app/download/download.html',
        ncyBreadcrumb: {
          parent: 'home',
          label: 'Формы документов'
        },
        controller: 'DownloadCtrl'
      })

      .state('application', {
        url: '/application',
        templateUrl: 'app/application/application.html',
        ncyBreadcrumb: {
          parent: 'home',
          label: 'Подать заявку на поручительство'
        },
        controller: 'ApplicationCtrl'
      })

      .state('ask-question', {
        url: '/ask-question',
        templateUrl: 'app/ask-question/ask-question.html',
        ncyBreadcrumb: {
          parent: 'home',
          label: 'Задать вопрос'
        },
        controller: 'AskQuestionCtrl'
      })

      .state('contacts', {
        url: '/contacts',
        templateUrl: 'app/contacts/contacts.html',
        ncyBreadcrumb: {
          parent: 'home',
          label: 'Контакты'
        },
        controller: 'ContactsCtrl'
      })

      .state('projects', {
        url: '/projects',
        templateUrl: 'app/projects/projects.html',
        ncyBreadcrumb: {
          parent: 'home',
          label: 'Наши проекты'
        },
        controller: 'ProjectsCtrl'
      })

      .state('tasks', {
        url: '/tasks',
        templateUrl: 'app/tasks/tasks.html',
        ncyBreadcrumb: {
          parent: 'home',
          label: 'Задачи фонда'
        },
        controller: 'TasksCtrl',
      })

      .state('regulatory-base', {
        url: '/regulatory-base',
        templateUrl: 'app/regulatory-base/regulatory-base.html',
        ncyBreadcrumb: {
          parent: 'home',
          label: 'Нормативно-правовая база'
        },
        controller: 'Regulatory-baseCtrl'
      })
      
      .state('archive-changes', {
        url: '/archive-changes',
        templateUrl: 'app/archive-changes/archive-changes.html',
        ncyBreadcrumb: {
          parent: 'home',
          label: 'Архив изменений'
        },
        controller: 'Archive-changesCtrl'
      })

      .state('changes-statutes', {
        url: '/changes-statutes',
        templateUrl: 'app/changes-statutes/changes-statutes.html',
        ncyBreadcrumb: {
          parent: 'archive-changes',
          label: 'Изменения в устав'
        },
        controller: 'Changes-statutesCtrl'
      })

      .state('changes-regulations', {
        url: '/changes-regulations',
        templateUrl: 'app/changes-regulations/changes-regulations.html',
        ncyBreadcrumb: {
          parent: 'archive-changes',
          label: 'Изменения в регламент'
        },
        controller: 'Changes-regulationsCtrl'
      })

      .state('certificate', {
        url: '/certificate',
        templateUrl: 'app/certificate/certificate.html',
        ncyBreadcrumb: {
          parent: 'archive-changes',
          label: 'Свидетельства Фонда'
        },
        controller: 'CertificateCtrl'
      })

      .state('advantages', {
        url: '/advantages',
        templateUrl: 'app/advantages/advantages.html',
        ncyBreadcrumb: {
          parent: 'home',
          label: 'Преимущества работы с фондом'
        },
        controller: 'AdvantagesCtrl'
      })

      .state('guarantee', {
        url: '/guarantee',
        templateUrl: 'app/guarantee/guarantee.html',
        ncyBreadcrumb: {
          parent: 'home',
          label: 'Условия предоставления поручительства Фонда по кредитным договорам'
        },
        controller: 'GuaranteeCtrl'
      })

      .state('obtaining-loan', {
        url: '/obtaining-loan',
        templateUrl: 'app/obtaining-loan/obtaining-loan.html',
        ncyBreadcrumb: {
          parent: 'home',
          label: 'Порядок получения кредита под поручительство Фонда'
        },
        controller: 'Obtaining-loanCtrl'
      })

      .state('support-buisness', {
        url: '/support-buisness',
        templateUrl: 'app/support-buisness/support-buisness.html',
        ncyBreadcrumb: {
          parent: 'home',
          label: 'Поддержка малого и среднего предпринимательства в разрезе муниципальных образований Тамбовской области'
        },
        controller: 'Support-buisnessCtrl'
      })

      .state('bank-advantages', {
        url: '/bank-advantages',
        templateUrl: 'app/bank-advantages/bank-advantages.html',
        ncyBreadcrumb: {
          parent: 'home',
          label: 'Преимущества работы с Фондом'
        },
        controller: 'Bank-advantagesCtrl'
      })

      .state('bank-partnership', {
        url: '/bank-partnership',
        templateUrl: 'app/bank-partnership/bank-partnership.html',
        ncyBreadcrumb: {
          parent: 'home',
          label: 'Критерии отборов финансовых организаций – партнёров по кредитным договорам, договорам о предоставлении банковской гарантии.'
        },
        controller: 'bank-partnershipCtrl'
      })

      .state('limits-guarantees', {
        url: '/limits-guarantees',
        templateUrl: 'app/limits-guarantees/limits-guarantees.html',
        ncyBreadcrumb: {
          parent: 'home',
          label: 'Лимиты поручительств на банки-партнеры'
        },
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


  .controller('AppCtrl',  function($scope, getJson){
    $scope.news = getJson;
  })



;
