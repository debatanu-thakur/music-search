import angular from 'angular';
import module from '../appHeader.module';

describe('Service: AppHeaderService', function() {
	beforeEach(angular.mock.module(module.name));

	// Providers
	beforeEach(angular.mock.module(function($provide) {
	}));

	// Injections
	beforeEach(inject(function($injector, AppHeaderService) {
		this.service = AppHeaderService;
	}));

	it('should be defined', function() {
		expect(this.service).toBeDefined();
	});
});
