'use strict';

angular.module('fond')
  .controller('Header', function () {
    // $scope.date = new Date();
  })

  .directive('header', function (){
    return{
      restrict: 'E',
      templateUrl: 'app/components/header/header.html',
      scope: {}
      // link: function(scope, element, attrs){
      //   scope.date = new Date();
      // }
    };
  })

;