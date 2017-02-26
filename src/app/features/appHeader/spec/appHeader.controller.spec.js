import angular from 'angular';
import module from '../appHeader.module';

describe('Controller: AppHeaderController', function() {
	beforeEach(angular.mock.module(module.name));

	beforeEach(angular.mock.module(function($provide) {
	}));

	beforeEach(inject(function($rootScope, $componentController) {
		this.$scope = $rootScope.$new();

		this.ctrl = $componentController('appHeader',
			{
				// locals
				$scope: this.$scope,
				$element: [{}],
				$attrs: [],
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
