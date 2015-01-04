softUniApp.controller('TownController', function($scope, adsData) {


    $scope.getTowns = function () {

        adsData.getAllTowns().then(function (data) {
            $scope.towns = data;
        }, function (error) {
            console.log(error);
        })
    };

    $scope.getTowns();

});
