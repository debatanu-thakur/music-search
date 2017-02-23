import angular from 'angular';
import module from '../appContents.module';

describe('Service: AppContentsService', function() {
	beforeEach(angular.mock.module(module.name));

	// Providers
	beforeEach(angular.mock.module(function($provide) {
	}));

	// Injections
	beforeEach(inject(function($injector, AppContentsService) {
		this.service = AppContentsService;
	}));

	it('should be defined', function() {
		expect(this.service).toBeDefined();
	});
});
