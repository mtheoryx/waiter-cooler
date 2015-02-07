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
            },
            updateCustomerRating: function (id, rating) {
                var ratingPayload = {
                    "rating": rating
                };
                var deferred = $q.defer();
                $http.put('http://localhost:3000/customers/' + id, ratingPayload)
                    .success(function (response) {
                        deferred.resolve(response);
                    })
                    .error(function (msg) {
                        deferred.reject(msg);
                    });
                return deferred.promise;
            }
            
        }
    }]);