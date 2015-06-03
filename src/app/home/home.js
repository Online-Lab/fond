'use strict';

angular.module('fond.home', ['ui.router'])


  .config(function config( $stateProvider ) {
    $stateProvider.state( 'home', {
      url: '/home',
      views: {
        'main': {
            controller: 'HomeCtrl',
            templateUrl: 'app/home/home.html'
        }
      },
      data:{ pageTitle: 'Домашняя' }
    });
  })


  .controller('HomeCtrl', function ($scope) {
    $scope.example = 'example';
  })


;
