import angular from 'angular';
import module from '../searchBar.module';

describe('Controller: SearchBarController', function() {
	beforeEach(angular.mock.module(module.name));

	beforeEach(angular.mock.module(function($provide) {
		$provide.service('SearchBarService', function() {
		});
	}));

	beforeEach(inject(function($rootScope, $componentController) {
		this.$scope = $rootScope.$new();

		this.ctrl = $componentController('searchBar',
			{
				// locals
				$scope: this.$scope,
				$element: [{}],
				$attrs: []
			},
			{
				// scope bindings
			}
		);
	}));

	it('should be defined', function() {
		expect(this.ctrl).toBeDefined();
	});
});
