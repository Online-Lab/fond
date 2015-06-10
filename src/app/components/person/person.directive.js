'use strict';

angular.module('person', [])

  .directive('person', function (){
    return{
      restrict: 'E',
      templateUrl: 'app/components/person/person.html',
      scope: {
        info: '='
      }
      // link: function(scope, element, attrs){
      //   scope.date = new Date();
      // }
    };
  })

;