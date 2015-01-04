softUniApp.controller('CategoryController', function($scope, adsData) {


    $scope.getCategories = function () {

        adsData.getAllCategories().then(function (data) {
            $scope.categories = data;
        }, function (error) {
            console.log(error);
        })
    };

    $scope.getCategories();

});
