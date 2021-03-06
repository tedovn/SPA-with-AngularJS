softUniApp.factory('adsData', function ($http, $q, $log, baseUrl) {

    function getAllAds(params) {
        var d = $q.defer();

        $http({
            method: 'GET',
            url: baseUrl + 'ads/',
            params: params
        })
            .success(function (data, status, headers, config) {
                d.resolve(data);
            })
            .error(function (data, status, headers, config) {
                d.reject(data);
            });

        return d.promise;
    }

    function getAllTowns() {
        var d = $q.defer();
        $http({
            method: 'GET',
            url: baseUrl + 'towns/'
        })
            .success(function (data, status, headers, config) {
                d.resolve(data);
            })
            .error(function (data, status, headers, config) {
                d.reject(data);
            });
        return d.promise;
    }

    function getAllCategories() {
        var d = $q.defer();
        $http({
            method: 'GET',
            url: baseUrl + 'categories/'
        })
            .success(function (data, status, headers, config) {
                d.resolve(data);
            })
            .error(function (data, status, headers, config) {
                d.reject(data);
            });
        return d.promise;
    }


    return {
        getAllAds: getAllAds,
        getAllTowns: getAllTowns,
        getAllCategories: getAllCategories
    }
});