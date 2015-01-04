softUniApp.factory('authData', function ($http, $q, baseUrl) {

    function login(params) {
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

    function register(params) {
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

    return {
        login: login,
        register: register
    }
});