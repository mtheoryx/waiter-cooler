describe('userSvc > ', function() {
    var userSvc,
        $httpBackend,
        $q;

    beforeEach(module('user'));

    beforeEach(inject(function ($injector) {
        $httpBackend = $injector.get('$httpBackend');
        userSvc = $injector.get('userSvc');
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
    
    describe('getOnlyUser method > ', function() {
        it('should call the appropriate route for the service', inject(function ($http, $httpBackend) {
            $httpBackend.when('GET', 'http://localhost:3000/user').respond(200, [{"test":"test"}]);

            $httpBackend.expectGET('http://localhost:3000/user');

            var getOnlyUserPromise = userSvc.getOnlyUser();
            getOnlyUserPromise.then(function (response) {
                expect(response).toBeTruthy();
            });
            $httpBackend.flush();

        }));
        it('should reject the promise correctly in case of server error', function() {
            $httpBackend.when('GET', 'http://localhost:3000/user').respond(500);

            $httpBackend.expectGET('http://localhost:3000/user');

            var getOnlyUserPromise = userSvc.getOnlyUser();
            getOnlyUserPromise.then(function (response) {
                expect(response).toBeFalsy();
            });
            $httpBackend.flush();
        });
    });

});