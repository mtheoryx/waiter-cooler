angular.module('customers')
    .controller('customersCtrl', function ($scope, customersSvc) {
       var customersSvcPromise = customersSvc.getAllCustomers();
        customersSvcPromise.then(function (list) {
            $scope.customerList = list;
        })
    });