'use strict';

angular.module('fond.news-page', [])

  .controller('NewsPageCtrl', function ($scope, $http) {

    $http.get('http://localhost:3000/news')
        .success(function(data){
            $scope.news1 = data[0];
        });
  })

;
