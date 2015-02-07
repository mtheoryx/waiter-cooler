(function () {
    'use strict';

    angular.module('user')
        .controller('userCtrl', function ($scope, userSvc) {
            $scope.user = {};
            $scope.user.greeting = '';

            var userServicePromise = userSvc.getOnlyUser();
            userServicePromise.then(function (user) {
                $scope.user = user;
                $scope.user.greeting = 'Hello ' + user.firstName + ' ' + user.lastName + '!';
            });

        });


})();