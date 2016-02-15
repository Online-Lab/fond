'use strict';

angular.module('fond.news-detail', [])

  .controller('NewsPageCtrl', function ($state, $rootScope, $scope, $stateParams, utils, getJson) {
    $scope.news = getJson.news;
    $scope.n = utils.findById(getJson.news, $stateParams.nId);
    $state.current.ncyBreadcrumb.label = $scope.n.desc;
  })

;
