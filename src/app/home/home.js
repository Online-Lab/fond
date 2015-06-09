'use strict';

angular.module('fond.home', [])

  .controller('HomeCtrl', function ($scope, $http) {

    $http.get('http://localhost:3000/news')
        .success(function(data){
            $scope.news = data;
        });
  })

;
