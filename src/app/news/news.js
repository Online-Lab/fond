'use strict';

angular.module('fond.news', [])

  .controller('NewsCtrl', function ($scope, $http) {

    $http.get('http://localhost:3000/news')
        .success(function(data){
            $scope.news = data;
            // console.log($scope.news);
        });
  })

;
