angular.module('customers')
    .controller('customersCtrl', function ($scope, customersSvc) {
       var customersSvcPromise = customersSvc.getAllCustomers();
        customersSvcPromise.then(function (list) {
            $scope.customerList = list;
        });

        updateCustomerRating = function (customer){
            var customerSvcUpdateRatingPromise = customersSvc.updateCustomerRating(customer.id, customer.rating)
            //Call service
            customerSvcUpdateRatingPromise.then(function (res) {
                console.log(res.name + ' has been updated');
            })
        };

        $scope.updateCustomerRating = updateCustomerRating;
    });