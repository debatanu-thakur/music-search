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
			},
			{
				// scope bindings
			}
		);
	}));

	it('should be defined', function() {
		expect(this.ctrl).toBeDefined();
	});

	describe(`toggle`, function() {
		it(`should open the search bar if it is closed`, function() {
			this.ctrl.isOpen = false; // initialize search bar to closed
			this.ctrl.toggle();
			expect(this.ctrl.isOpen).toBeTruthy();
		});

		it(`should close the search bar if it is open`, function() {
			this.ctrl.isOpen = true; // initialize search bar to opened
			this.ctrl.toggle();
			expect(this.ctrl.isOpen).toBeFalsy();
		});
	});

	describe(`searchClick`, function() {
		beforeEach(function() {
			this.ctrl.searchInitiate = jasmine.createSpy(`searchInitiate`);
		});
		it(`should open the search bar when clicked on search icon`, function() {
			this.ctrl.isOpen = false;
			this.ctrl.searchClick();
			expect(this.ctrl.isOpen).toBeTruthy();
		});

		it(`should not initiate search when query is empty`, function() {
			this.ctrl.isOpen = true;
			this.ctrl.query = ``;
			this.ctrl.searchClick();
			expect(this.ctrl.searchInitiate).not.toHaveBeenCalled();
		});

		it(`should initiate search when query is non-empty`, function() {
			this.ctrl.isOpen = true;
			this.ctrl.query = `led zep`;
			this.ctrl.searchClick();
			expect(this.ctrl.searchInitiate).toHaveBeenCalled();
		});
	});
});
