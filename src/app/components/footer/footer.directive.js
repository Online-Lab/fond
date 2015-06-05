'use strict';

angular.module('footer', [])

  .directive('footer', function (){
    return{
      restrict: 'E',
      templateUrl: 'app/components/footer/footer.html',
      scope: {}
      // link: function(scope, element, attrs){
      //   scope.date = new Date();
      // }
    };
  })

;
