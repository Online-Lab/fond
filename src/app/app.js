'use strict';

angular.module('fond', 
    ['ngAnimate', 
  'ngCookies', 
  'ngTouch', 
  'ngSanitize', 
  'ngResource', 
  'ui.router', 
  'ngMaterial',
  'fond.home',
  'components'
])

.config(['$stateProvider', 
    function($stateProvider){
    $stateProvider
        .state('app', {
            url: '/',
            templateUrl: '../app/home/home.html',
            controller: 'AppCtrl'
        });
}])
.controller('AppCtrl',  function(){
})
;
