angular.module('customers')
    .factory('customersSvc', ['$http', '$q', function ($http, $q) {
        return {
            getAllCustomers: function () {
                var deferred = $q.defer();
                deferred.resolve('');
                return deferred.promise;
            }
        }
    }]);