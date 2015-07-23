'use strict';

angular.module('fond.news-detail', [])

  .controller('NewsPageCtrl', function ($scope, $stateParams, utils, newsList) {
    $scope.news = newsList;
    $scope.n = utils.findById($scope.news, $stateParams.nId);
  })

;
