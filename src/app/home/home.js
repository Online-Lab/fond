'use strict';

angular.module('fond.home', [])

  .config(['$stateProvider', 
    function($stateProvider){
    $stateProvider
        .state('home',{
          url: '/home',
          templateUrl: '../app/home/home.html' ,
          controller: 'HomeCtrl'
        });
}])



  .controller('HomeCtrl', function ($scope) {
    $scope.example = 'example';
  })


;
