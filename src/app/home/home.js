'use strict';

angular.module('fond.home', [])
  
  .controller('HomeCtrl', function ($scope, newsList) {
    $scope.news = newsList;
  })

;
