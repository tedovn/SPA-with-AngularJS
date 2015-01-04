var softUniApp = angular.module('softUniApp', ['ngResource','ngRoute'])
    .config(function ($routeProvider, $locationProvider) {

        $routeProvider.when('/register' , {
            title: 'Ads - Registration',
            templateUrl : 'templates/register.html',
            controller : 'RegisterController'
        });

        $routeProvider.when('/login' , {
            title: 'Ads - Login',
            templateUrl : 'templates/login.html',
            controller : 'LoginController'
        });


        $routeProvider.when('/' , {
            title: 'Ads - Home',
            templateUrl : 'templates/all-ads.html',
            controller : 'AdsController'
        });

        $routeProvider.otherwise({
            redirectTo: '/'
        });
    })
    .constant('baseUrl', 'http://localhost:1337/api/');