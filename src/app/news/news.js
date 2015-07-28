'use strict';

angular.module('fond.news', [])

  .controller('NewsCtrl', function ($scope, getJson) {
    $scope.news = getJson.news;

  })

;
