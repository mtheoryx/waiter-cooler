(function () {
    'use strict';
    angular.module('user')
        .factory('userSvc', function ($http, $q) {
            return {
                getCurrentUser: function () {
                    var deferred = $q.defer();
                    var mockUser = {username:'David'};
                    deferred.resolve(mockUser);
                    return deferred.promise;
                }
            }

        })

})();