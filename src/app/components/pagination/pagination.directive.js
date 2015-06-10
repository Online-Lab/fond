'use strict';

angular.module('pagination', [])

    .directive('pagination', function(){
        return{
            restrict: 'E',
            templateUrl: 'app/components/pagination/pagination.html',
            scope: {}
            // link: function(scope, element, attrs){
                
            // }
        };
    })

;