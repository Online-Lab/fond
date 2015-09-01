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
        });
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
          label: ' Отчетность фонда'
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
        url: '/news/{nId}',
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
        resolve:{
          getJson: ['getJson',
            function(getJson){
              return getJson.all();
            }
          ]
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











        .state('dis1', {
          url: '/dis1',
          templateUrl: 'app/projects/byRegion/dis1.html',
          ncyBreadcrumb: {
            parent: 'projects',
            label: 'Бондарский район'
          },
          controller: 'ProjectsCtrl'
        })

        .state('dis2', {
          url: '/dis2',
          templateUrl: 'app/projects/byRegion/dis2.html',
          ncyBreadcrumb: {
            parent: 'projects',
            label: 'Гавриловский район'
          },
          controller: 'ProjectsCtrl'
        })

        .state('dis4', {
          url: '/dis4',
          templateUrl: 'app/projects/byRegion/dis4.html',
          ncyBreadcrumb: {
            parent: 'projects',
            label: 'Знаменский район'
          },
          controller: 'ProjectsCtrl'
        })

        .state('dis5', {
          url: '/dis5',
          templateUrl: 'app/projects/byRegion/dis5.html',
          ncyBreadcrumb: {
            parent: 'projects',
            label: 'Инжавинский район'
          },
          controller: 'ProjectsCtrl'
        })

        .state('dis6', {
          url: '/dis6',
          templateUrl: 'app/projects/byRegion/dis6.html',
          ncyBreadcrumb: {
            parent: 'projects',
            label: 'Кирсановский район'
          },
          controller: 'ProjectsCtrl'
        })


        .state('dis7', {
          url: '/dis7',
          templateUrl: 'app/projects/byRegion/dis7.html',
          ncyBreadcrumb: {
            parent: 'projects',
            label: 'Мичуринский район'
          },
          controller: 'ProjectsCtrl'
        })

        .state('dis8', {
          url: '/dis8',
          templateUrl: 'app/projects/byRegion/dis8.html',
          ncyBreadcrumb: {
            parent: 'projects',
            label: 'Мордовский район'
          },
          controller: 'ProjectsCtrl'
        })

        .state('dis9', {
          url: '/dis9',
          templateUrl: 'app/projects/byRegion/dis9.html',
          ncyBreadcrumb: {
            parent: 'projects',
            label: 'Моршанский район'
          },
          controller: 'ProjectsCtrl'
        })

        .state('dis10', {
          url: '/dis10',
          templateUrl: 'app/projects/byRegion/dis10.html',
          ncyBreadcrumb: {
            parent: 'projects',
            label: 'Мучкапский район'
          },
          controller: 'ProjectsCtrl'
        })

        .state('dis11', {
          url: '/dis11',
          templateUrl: 'app/projects/byRegion/dis11.html',
          ncyBreadcrumb: {
            parent: 'projects',
            label: 'Никифоровский район'
          },
          controller: 'ProjectsCtrl'
        })

        .state('dis12', {
          url: '/dis12',
          templateUrl: 'app/projects/byRegion/dis12.html',
          ncyBreadcrumb: {
            parent: 'projects',
            label: 'Первомайский район'
          },
          controller: 'ProjectsCtrl'
        })

        .state('dis13', {
          url: '/dis13',
          templateUrl: 'app/projects/byRegion/dis13.html',
          ncyBreadcrumb: {
            parent: 'projects',
            label: 'Петровский район'
          },
          controller: 'ProjectsCtrl'
        })

        .state('dis14', {
          url: '/dis14',
          templateUrl: 'app/projects/byRegion/dis14.html',
          ncyBreadcrumb: {
            parent: 'projects',
            label: 'Пичаевский район'
          },
          controller: 'ProjectsCtrl'
        })

        .state('dis15', {
          url: '/dis15',
          templateUrl: 'app/projects/byRegion/dis15.html',
          ncyBreadcrumb: {
            parent: 'projects',
            label: 'Рассказовский район'
          },
          controller: 'ProjectsCtrl'
        })

        .state('dis16', {
          url: '/dis16',
          templateUrl: 'app/projects/byRegion/dis16.html',
          ncyBreadcrumb: {
            parent: 'projects',
            label: 'Ржаксинский район'
          },
          controller: 'ProjectsCtrl'
        })

        .state('dis17', {
          url: '/dis17',
          templateUrl: 'app/projects/byRegion/dis17.html',
          ncyBreadcrumb: {
            parent: 'projects',
            label: 'Сампурский район'
          },
          controller: 'ProjectsCtrl'
        })

        .state('dis18', {
          url: '/dis18',
          templateUrl: 'app/projects/byRegion/dis18.html',
          ncyBreadcrumb: {
            parent: 'projects',
            label: 'Сосновский район'
          },
          controller: 'ProjectsCtrl'
        })

        .state('dis19', {
          url: '/dis19',
          templateUrl: 'app/projects/byRegion/dis19.html',
          ncyBreadcrumb: {
            parent: 'projects',
            label: 'Староюрьевский район'
          },
          controller: 'ProjectsCtrl'
        })


        .state('dis20', {
          url: '/dis20',
          templateUrl: 'app/projects/byRegion/dis20.html',
          ncyBreadcrumb: {
            parent: 'projects',
            label: 'Тамбовский район'
          },
          controller: 'ProjectsCtrl'
        })

        .state('dis21', {
          url: '/dis21',
          templateUrl: 'app/projects/byRegion/dis21.html',
          ncyBreadcrumb: {
            parent: 'projects',
            label: 'Токаревский район'
          },
          controller: 'ProjectsCtrl'
        })

        .state('dis22', {
          url: '/dis22',
          templateUrl: 'app/projects/byRegion/dis22.html',
          ncyBreadcrumb: {
            parent: 'projects',
            label: 'Уваровский район'
          },
          controller: 'ProjectsCtrl'
        })

        .state('dis23', {
          url: '/dis23',
          templateUrl: 'app/projects/byRegion/dis23.html',
          ncyBreadcrumb: {
            parent: 'projects',
            label: 'Умётский район'
          },
          controller: 'ProjectsCtrl'
        })

        .state('dis24', {
          url: '/dis24',
          templateUrl: 'app/projects/byRegion/dis24.html',
          ncyBreadcrumb: {
            parent: 'projects',
            label: 'г. Кирсанов'
          },
          controller: 'ProjectsCtrl'
        })

        .state('dis25', {
          url: '/dis25',
          templateUrl: 'app/projects/byRegion/dis25.html',
          ncyBreadcrumb: {
            parent: 'projects',
            label: 'г. Котовск'
          },
          controller: 'ProjectsCtrl'
        })

        .state('dis26', {
          url: '/dis26',
          templateUrl: 'app/projects/byRegion/dis26.html',
          ncyBreadcrumb: {
            parent: 'projects',
            label: 'г. Мичуринск'
          },
          controller: 'ProjectsCtrl'
        })

        .state('dis27', {
          url: '/dis27',
          templateUrl: 'app/projects/byRegion/dis27.html',
          ncyBreadcrumb: {
            parent: 'projects',
            label: 'г. Рассказово'
          },
          controller: 'ProjectsCtrl'
        })

        .state('dis28', {
          url: '/dis28',
          templateUrl: 'app/projects/byRegion/dis28.html',
          ncyBreadcrumb: {
            parent: 'projects',
            label: 'г. Уварово'
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


  .controller('AppCtrl',  function($scope, getJson, $rootScope){
    $scope.news = getJson;
    $rootScope.sandBlindVer = false;
    $rootScope.fontSize = 'medium';
    $rootScope.colorTheme = 'white';

  })



;
