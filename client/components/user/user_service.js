(function () {
    'use strict';
    angular.module('user')
        .factory('userSvc', function ($http, $q) {
            return {
                getOnlyUser: function () {
                    var deferred = $q.defer();

                    $http.get('http://localhost:3000/user')
                        .success(function (data) {
                            deferred.resolve(data);
                        })
                        .error(function (msg) {
                            deferred.reject(msg);
                        });

                    return deferred.promise;
                }
            }

        })

})();