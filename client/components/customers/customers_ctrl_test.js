describe(' controller > ', function() {

    var ctrl,
        $scope,
        $q,
        deferred,
        $httpBackend,
        customersSvc,
        mockCustomers;

    beforeEach(function () {
        module('customers');

        var mock = jasmine.createSpyObj('customersSvc', ['getAllCustomers']);
        mockCustomers = [
            {
                "id": 0,
                "name": "Bethel Zboncak",
                "rating":0
              },
              {
                "id": 1,
                "name": "Chasity Rohan",
                "rating":0
              },
              {
                "id": 2,
                "name": "Ahmad Langosh",
                  "rating":0
              },
              {
                "id": 3,
                "name": "Dr. Luigi Miller",
                  "rating":0
              },
              {
                "id": 4,
                "name": "Ophelia Gislason",
                  "rating":0
              },
              {
                "id": 5,
                "name": "Mrs. Keara Olson",
                  "rating":0
              },
              {
                "id": 6,
                "name": "Genoveva Gleason"
              }
        ];


        inject(function ($rootScope, $controller, _$q_, _$httpBackend_) {
            $scope = $rootScope.$new();
            $q = _$q_;
            deferred = $q.defer();
            $httpBackend = _$httpBackend_;

            mock.getAllCustomers.and.returnValue($q.when(mockCustomers));

            ctrl = $controller('customersCtrl', {
                $scope: $scope,
                customersSvc: mock
            });
        });
    });
    describe('custom list > ', function () {
        it('should set the customer list', function() {
            $scope.$apply();
            expect($scope.customerList).toBeDefined();
            expect($scope.customerList).toBe(mockCustomers);
            expect($scope.customerList[0].rating).toBeDefined();
        });
    })
});