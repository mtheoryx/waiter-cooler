describe('customerSvc > ', function() {
    var $httpBackend,
        customersSvc;

    beforeEach(module('customers'));

    beforeEach(inject(function ($injector) {
        $httpBackend = $injector.get('$httpBackend');
        customersSvc = $injector.get('customersSvc');
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe(' method > ', function() {
        it('', inject(function ($http, $httpBackend) {
            //$httpBackend.when().respond();
            //
            //$httpBackend.expectGET();

            var customerSvcPromise = customersSvc.getAllCustomers();
            customerSvcPromise.then(function () {

            });


            //$httpBackend.flush();

        }));
    });

});