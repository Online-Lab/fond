'use strict';

angular.module('header', [])

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