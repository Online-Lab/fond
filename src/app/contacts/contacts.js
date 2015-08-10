'use strict';

angular.module('fond.contacts', [])

.controller('ContactsCtrl', function ($scope, getJson) {
  $scope.director = getJson.persons[0];
  // console.log($scope.director);
  $scope.persons =  getJson.persons;
})

;
