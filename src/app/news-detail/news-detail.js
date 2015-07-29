'use strict';

angular.module('fond.news-detail', [])

  .controller('NewsPageCtrl', function ($scope, $stateParams, utils, getJson) {
    $scope.news = getJson.news;
    $scope.n = utils.findById(getJson.news, $stateParams.nId);
  })

;
