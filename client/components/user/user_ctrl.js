(function () {
    'use strict';

    angular.module('user')
        .controller('userCtrl', function ($scope, userSvc) {


            var userServicePromise = userSvc.getCurrentUser();
            userServicePromise.then(function (user) {
                $scope.user = user;
                $scope.user.greeting = 'Hello ' + user.username + '!';
            });


        });


})();