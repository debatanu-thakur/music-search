import angular from 'angular';
import module from '../app.module';

describe('Service: AppService', function() {
	beforeEach(angular.mock.module(module.name));

	// Providers
	beforeEach(angular.mock.module(function($provide) {
	}));

	// Injections
	beforeEach(inject(function($injector, AppService) {
		this.service = AppService;
	}));

	it('should be defined', function() {
		expect(this.service).toBeDefined();
	});
});
