'use strict';

angular.module('fond.home', [])
  
  .controller('HomeCtrl', function ($scope, getJson) {
    $scope.news = getJson.news;
    $scope.banks = getJson.banks;
  })

;
