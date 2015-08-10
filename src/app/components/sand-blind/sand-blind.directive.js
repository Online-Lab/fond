'use strict';

angular.module('sand-blind', ['ngResource'])

    .directive('sandBlind', function($rootScope){
        return{
            restrict: 'E',
            templateUrl: 'app/components/sand-blind/sand-blind.html',
            scope: {},
            controller: function($rootScope, $scope){
                $scope.toggleSandBlindVer = function(){
                  $rootScope.sandBlindVer = !$rootScope.sandBlindVer;
                };
            }
        };
    })

;