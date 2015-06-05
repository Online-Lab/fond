'use strict';

angular.module('aside', ['ngResource'])

    .directive('aside', function($http){
        return{
            restrict: 'E',
            templateUrl: 'app/components/aside/aside.html',
            scope: {},
            link: function(scope, element, attrs){
                scope.date = new Date();
                // scope.exchangeData = exchangeRates.http.$$state;
                // console.log(exchangeRates.getData());
                 var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20(%22USDRUB%22%2C%20%22EURRUB%22)&format=json&diagnostics=false&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=JSON_CALLBACK";
                $http.jsonp( url )
                    .success(function(data){
                        scope.exchangeData = data.query.results.rate;
                        var eBid = scope.exchangeData[1].Bid,
                            eAsk = scope.exchangeData[1].Ask,
                            uBid = scope.exchangeData[0].Bid,
                            uAsk = scope.exchangeData[0].Ask;
                        scope.spreadEuro = (eBid - eAsk).toFixed(4);
                        scope.spreadUsa = (uBid - uAsk).toFixed(4);
                    }).error(function(err){
                        console.log(err);
                    });
            }
        };
    })

;