softUniApp.factory('userData', function ($http, $q, baseUrl, authData, $rootScope) {

    var userBaseUrl = baseUrl + 'user/';
    var service = {};
    service.userPassword = {};

    service.updateUserPassword = function (value) {

        this.userPassword = value;
        $rootScope.$broadcast('valueUpdated');
    };

    var headers = authData.getAuthorizationHeaders();


    function createNewAd(data) {
        var d = q.defer();
        var url = userBaseUrl + 'ads/';

        $http({

            method: 'POST',
            url: url,
            headers: headers,
            data: data
        })
            .success(function (data, status, headers, config) {
                d.resolve(data);
            })
            .error(function (data, status, headers, config) {
                d.reject(data);
            });

        return d.promise;

    }

    function getUserAds(params) {
        var d = q.defer();
        var url = userBaseUrl + 'ads/';

        $http({

            method: 'GET',
            url: url,
            params: params,
            headers: headers
        })
            .success(function (data, status, headers, config) {
                d.resolve(data);
            })
            .error(function (data, status, headers, config) {
                d.reject(data);
            });

        return d.promise;

    }

    function deactivateUserAd(data) {
        var d = q.defer();
        var url = userBaseUrl + 'ads/deactivate/' + data.id;

        $http({

            method: 'POST',
            url: url,
            headers: headers,
            data: data
        })
            .success(function (data, status, headers, config) {
                d.resolve(data);
            })
            .error(function (data, status, headers, config) {
                d.reject(data);
            });

        return d.promise;

    }

    function publishAgainUserAd(data) {
        var d = q.defer();
        var url = userBaseUrl + 'ads/publishagain/' + data.id;

        $http({

            method: 'PUT',
            url: url,
            headers: headers,
            data: data
        })
            .success(function (data, status, headers, config) {
                d.resolve(data);
            })
            .error(function (data, status, headers, config) {
                d.reject(data);
            });

        return d.promise;

    }

    function getUserAdById(data) {
        var d = q.defer();
        var url = userBaseUrl + 'ads/' + data.id;

        $http({

            method: 'GET',
            url: url,
            headers: headers,
            data: data
        })
            .success(function (data, status, headers, config) {
                d.resolve(data);
            })
            .error(function (data, status, headers, config) {
                d.reject(data);
            });

        return d.promise;
    }

    function editUserAd(data) {
        var d = q.defer();
        var url = userBaseUrl + 'ads/publishagain/' + data.id;

        $http({

            method: 'PUT',
            url: url,
            headers: headers,
            data: data
        })
            .success(function (data, status, headers, config) {
                d.resolve(data);
            })
            .error(function (data, status, headers, config) {
                d.reject(data);
            });

        return d.promise;
    }

    function deleteAdById(id) {
        var d = q.defer();
        var url = userBaseUrl + 'ads/publishagain/' + id;

        $http({

            method: 'DELETE',
            url: url,
            headers: headers

        })
            .success(function (data, status, headers, config) {
                d.resolve(data);
            })
            .error(function (data, status, headers, config) {
                d.reject(data);
            });

        return d.promise;
    }

    function changeUserPassword(password) {
        var d = q.defer();
        var url = userBaseUrl + 'changePassword/';

        $http({

            method: 'DELETE',
            url: url,
            headers: headers,
            data: password
        })
            .success(function (data, status, headers, config) {
                d.resolve(data);
            })
            .error(function (data, status, headers, config) {
                d.reject(data);
            });

        return d.promise;
    }

    function getUserProfile() {
        var d = q.defer();
        var url = userBaseUrl + 'profile/';

        $http({

            method: 'GET',
            url: url,
            headers: headers
        })
            .success(function (data, status, headers, config) {
                d.resolve(data);
            })
            .error(function (data, status, headers, config) {
                d.reject(data);
            });

        return d.promise;
    }

    function editUserProfile(user) {
        var d = q.defer();
        var url = userBaseUrl + 'profile/';

        $http({

            method: 'PUT',
            url: url,
            headers: headers,
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

        createNewAd: createNewAd,
        getUserAds: getUserAds,
        deactivateUserAd: deactivateUserAd,
        publishAgainUserAd: publishAgainUserAd,
        getUserAdById: getUserAdById,
        editUserAd: editUserAd,
        deleteAdById: deleteAdById,
        changeUserPassword: changeUserPassword,
        getUserProfile: getUserProfile,
        editUserProfile: editUserProfile,
        service: service
    }
});