'use strict';

angular.module('header', [])

  .directive('header', function ($rootScope){
    return{
      restrict: 'E',
      templateUrl: 'app/components/header/header.html',
      scope: {},

      controller: function($rootScope, $scope){
        $scope.toggleSandBlindVer = function(){
          $rootScope.sandBlindVer = !$rootScope.sandBlindVer;
        };
      }
      
    };
  })

;