'use strict';

angular.module('fond.news-detail', [])

  .controller('NewsPageCtrl', function ($scope, $stateParams, utils) {
    $scope.n = utils.findById($scope.news, $stateParams.nId);
  })

;
