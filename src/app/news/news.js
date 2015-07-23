'use strict';

angular.module('fond.news', [])

  .controller('NewsCtrl', function ($scope, newsList) {
    $scope.news = newsList;

  })

;
