angular.module('customers')
    .factory('customersSvc', ['$http', '$q', function ($http, $q) {
        return {
            getAllCustomers: function () {
                var deferred = $q.defer();
                $http.get('http://localhost:3000/customers')
                    .success(function (data) {
                        deferred.resolve(data);
                    })
                    .error(function (msg) {
                        deferred.reject(msg)
                    });

                return deferred.promise;
            }
        }
    }]);