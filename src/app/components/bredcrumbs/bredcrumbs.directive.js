'use strict';

angular.module('bredcrumbs', [])

    .directive('bredcrumbs', function(){
        return{
            restrict: 'E',
            templateUrl: 'app/components/bredcrumbs/bredcrumbs.html',
            scope: {}
            // link: function(scope, element, attrs){
                
            // }
        };
    })

;