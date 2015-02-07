angular.module('customers')
    .controller('customersCtrl', function (customersSvc) {
       var customersSvcPromise = customersSvc.getAllCustomers();
        customersSvcPromise.then(function (list) {
            console.log(list);
        })
    });