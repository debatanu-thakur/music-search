import angular from 'angular';
import module from '../appBody.module';

describe('Service: AppBodyService', function() {
	beforeEach(angular.mock.module(module.name));

	// Providers
	beforeEach(angular.mock.module(function($provide) {
	}));

	// Injections
	beforeEach(inject(function($injector, AppBodyService) {
		this.service = AppBodyService;
	}));

	it('should be defined', function() {
		expect(this.service).toBeDefined();
	});
});
