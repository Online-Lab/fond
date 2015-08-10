'use strict';

angular.module('fond.projects', [])
    .directive('projects', function(){
      return{
          restrict: 'EA',
          templateUrl: 'app/projects/projects-directive.html',
          scope: {},
          link: function(scope, element, attrs){
               scope.projects = ['', 'Бондарский район', 'Гавриловский район', 'Жердевский район', 'Знаменский район', 'Инжавинский район', 'Кирсановский район', 'Мичуринский район', 'Мордовский район', 'Моршанский район', 'Мучкапский район', 'Никифоровский район', 'Первомайский район', 'Петровский район', 'Пичаевский район', 'Рассказовский район', 'Ржаксинский район', 'Сампурский район', 'Сосновский район', 'Староюрьевский район', 'Тамбовский район', 'Токарёвский район', 'Уваровский район', 'Умётский район'];
                scope.hover = function(){
                    var thisIndex = this.$index;
                    console.log(element);
                }
          }
      }
    })
    .controller('ProjectsCtrl', function ($scope) {
      $scope.hovering = false;

    })

;
