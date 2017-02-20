import angular from 'angular';
import module from '../searchBar.module';

describe('Service: SearchBarService', function() {
	beforeEach(angular.mock.module(module.name));

	// Providers
	beforeEach(angular.mock.module(function($provide) {
	}));

	// Injections
	beforeEach(inject(function($injector, SearchBarService) {
		this.service = SearchBarService;
	}));

	it('should be defined', function() {
		expect(this.service).toBeDefined();
	});
});
