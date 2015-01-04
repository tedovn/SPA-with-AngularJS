softUniApp.controller('AdsController', function($scope, adsData) {


    $scope.getAds = function (params) {

        adsData.getAllAds(params).then(function (data) {
                $scope.allAds = data;
        }, function (error) {
            console.log(error);
        })
    };


    adsData.getAllTowns(function(resp){
        $scope.towns = resp;
    });
    adsData.getAllCategories(function(resp){
        $scope.categories = resp;
    });

    $scope.adsRequestParams = {
        startPage: 1,
        pageSize: 10,
        townId: null,
        categoryId: null
    };


    $scope.getAds($scope.adsRequestParams);

});
