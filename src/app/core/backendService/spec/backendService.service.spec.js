import angular from 'angular';
import module from '../../core.module';

describe('Service: BackendService', function() {
	beforeEach(angular.mock.module(module.name));

	// Providers
	beforeEach(angular.mock.module(function($provide) {
	}));

	// Injections
	beforeEach(inject(function($injector, BackendService) {
		this.service = BackendService;
        this.service.$http =  jasmine.createSpy('$http');
	}));

	it('should be defined', function() {
		expect(this.service).toBeDefined();
	});

    describe(`serviceRequest`, function() {
        it(`should call http request with supplied parameters`, function() {
            const url = `api`;
            const method = `GET`;
            const data = {};
            const params = {q: ``};
            const headers = null;
            
            this.service.serviceRequest({
                url,
                method,
                data,
                params,
                headers,
            });
            expect(this.service.$http).toHaveBeenCalledWith({
                url,
                method,
                data,
                params,
                headers,
            });
        });
    });
    describe(`all other service requests`, function() {
        beforeEach(function() {
            spyOn(this.service, `serviceRequest`);
        });

        describe(`getMethod`, function() {
            it(`should invoke the GET method service request`, function() {
                const url = `api`;
                const method = `get`;
                const params = {q: ``};
                const data = null;
                const headers = null;

                this.service.getMethod({
                    url,
                    params,
                    headers,
                });
                expect(this.service.serviceRequest).toHaveBeenCalledWith({
                    url,
                    method,
                    data,
                    params,
                    headers,
                });
            });
        });

        describe(`postMethod`, function() {
            it(`should invoke the POST method service request`, function() {
                const url = `api`;
                const method = `post`;
                const params = {q: ``};
                const data = {};
                const headers = null;

                this.service.postMethod({
                    url,
                    data,
                    params,
                    headers,
                });
                expect(this.service.serviceRequest).toHaveBeenCalledWith({
                    url,
                    method,
                    data,
                    params,
                    headers,
                });
            });
        });
    });
});
