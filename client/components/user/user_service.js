(function () {
    'use strict';
    angular.module('user')
        .factory('userSvc', function ($http, $q) {
            return {
                getOnlyUser: function () {
                    var deferred = $q.defer();

                    $http.get('http://localhost:3000/users')
                        .success(function (data) {
                            deferred.resolve(data[0]);
                        })
                        .error(function (msg) {
                            deferred.reject(msg);
                        });

                    return deferred.promise;
                }
            }

        })

})();