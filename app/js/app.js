var softUniApp = angular.module('softUniApp', ['ngResource','ngRoute', 'ngCookies'])
    .config(function ($routeProvider, $locationProvider) {

        $routeProvider.when('/register' , {
            title: 'Ads - Registration',
            templateUrl : 'templates/register.html',
            controller : 'LoginController'
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

        $routeProvider.when('/user/home', {
           title: 'Ads - Home',
           templateUrl: 'templates/all-ads.html',
           controller: 'AdsController'
        });

        $routeProvider.when('/user/ads/publish-new-ad', {
            title: 'Ads - Publish New Ad',
            templateUrl: 'templates/user/publish-new-ad.html',
            controller: 'PublishAdController'
        });

        $routeProvider.when('/user/profile', {
           title: 'Ads - Edit User Profile',
           templateUrl: 'templates/user/edit-user-profile.html',
           controller: 'EditUserProfileController'
        });

        $routeProvider.when('/user/ads', {
            title: 'Ads - My Ads',
            templateUrl: 'templates/user/user-ads',
            controller: 'UserAdsController'
        });

        $routeProvider.when('/user/ads/edit/:id', {
            title: 'Ads - Edit Ad',
            templateUrl: 'templates/user/user-edit-ad.html',
            controller: 'UserEditAdController'
        });

        $routeProvider.when('/user/ads/delete/:id', {
            title: 'Ads - Edit Ad',
            templateUrl: 'templates/user/user-delete-ad.html',
            controller: 'UserDeleteAdController'
        });

        $routeProvider.otherwise({
            redirectTo: '/'
        });
    })
    .constant('baseUrl', 'http://localhost:1337/api/');