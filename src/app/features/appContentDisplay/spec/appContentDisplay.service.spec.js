import angular from 'angular';
import module from '../appContentDisplay.module';

describe('Service: AppContentDisplayService', function() {
	beforeEach(angular.mock.module(module.name));

	// Providers
	beforeEach(angular.mock.module(function($provide) {
	}));

	// Injections
	beforeEach(inject(function($injector, AppContentDisplayService) {
		this.service = AppContentDisplayService;
	}));

	it('should be defined', function() {
		expect(this.service).toBeDefined();
	});
});
