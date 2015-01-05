softUniApp.factory('authData', function ($http, $q, baseUrl) {

    function login(user) {
        var d = $q.defer();

        $http({
            method: 'POST',
            url: baseUrl + 'user/login/',
            data: user
        })
            .success(function (data, status, headers, config) {
                d.resolve(data);
            })
            .error(function (data, status, headers, config) {
                d.reject(data);
            });

        return d.promise;
    }

    function register(user) {
        var d = $q.defer();

        $http({
            method: 'POST',
            url: baseUrl + 'user/register/',
            data: user
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