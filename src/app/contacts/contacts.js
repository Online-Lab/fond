'use strict';

angular.module('fond.contacts', [])

.controller('ContactsCtrl', function ($scope, $http) {
    $http.get('http://localhost:3000/persons')
            .success(function(data){
                $scope.persons = data;
                $scope.director = data[0];
            });
})

;
