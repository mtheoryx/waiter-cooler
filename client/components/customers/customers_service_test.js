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

    describe('getAllCustomers method > ', function() {
        it('should call the correct route', inject(function ($http, $httpBackend) {
            $httpBackend.when('GET', 'http://localhost:3000/customers').respond(200, [{"test":"test"}]);

            $httpBackend.expectGET('http://localhost:3000/customers');

            var customerSvcPromise = customersSvc.getAllCustomers();
            customerSvcPromise.then(function (response) {
                expect(response).toBeTruthy();
            });


            $httpBackend.flush();

        }));
    });
    describe('updateCustomerRationg method > ', function() {
        it('should call the correct route', function() {
            var ratingPayload = {
                rating:2
            };
            $httpBackend.when('PUT', 'http://localhost:3000/customers/2', ratingPayload).respond(200, [{"test":"test"}]);

            $httpBackend.expectPUT('http://localhost:3000/customers/2', ratingPayload);

            var customerSvcPromise = customersSvc.updateCustomerRating(2,2);
            customerSvcPromise.then(function (response) {
                expect(response).toBeTruthy();
            });


            $httpBackend.flush();
        });
    });

});