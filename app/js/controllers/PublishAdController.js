softUniApp.controller('PublishAdController', function ($scope, $window, messaging, $rootScope, userData) {

    $scope.createNewAd = function () {

        userData.createNewAd($scope.newAdObj).then(function (data) {

            messaging.successMessage(data.message);
            $window.location.href = '#/user/ads';
        }, function (error) {

            var err = errorRequirement(error);
            messaging.errorMessage(err)
        })
    };

    function errorRequirement(error){
        if(error.message){
            return 'Text and Title fields are required!';
        }
    }
});
