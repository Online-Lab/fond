'use strict';

angular.module('pagination', [])

    .directive('pagination', function($http){
        return{
            restrict: 'E',
            templateUrl: 'app/components/pagination/pagination.html',
            scope: {}
            // link: function(scope, element, attrs){
                
            // }
        };
    })

;