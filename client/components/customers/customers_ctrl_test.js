describe(' controller > ', function() {

    var ctrl,
        $scope,
        $q,
        deferred,
        $httpBackend;

	beforeEach(function () {
	    module('');

        var mock = jasmine.createSpyObj('', ['']);

        inject(function ($rootScope, $controller, _$q_, _$httpBackend_) {
            $scope = $rootScope.$new();
            $q = _$q_;
            deferred = $q.defer();
            $httpBackend = _$httpBackend_;

            ctrl = $controller('', {
                $scope: $scope
            });
        });
	});