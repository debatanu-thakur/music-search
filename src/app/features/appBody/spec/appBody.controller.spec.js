import angular from 'angular';
import module from '../appBody.module';

describe('Controller: AppBodyController', function() {
	let defer;

	beforeEach(angular.mock.module(module.name));

	beforeEach(angular.mock.module(function($provide) {
		$provide.service('AppBodyService', function($q) {
			defer = $q.defer();
			this.fetchAPI = jasmine.createSpy(`fetchAPI`)
				.and
				.returnValue(defer.promise);
			this.fetchAlbum = jasmine.createSpy(`fetchAlbum`)
				.and
				.returnValue(defer.promise);
		});
	}));

	beforeEach(inject(function($rootScope, $componentController) {
		this.$scope = $rootScope.$new();

		this.ctrl = $componentController('appBody',
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

	describe(`fetchAPI`, function() {
		it(`should call the api using service`, function() {
			this.ctrl.fetchAPI();
			expect(this.ctrl.AppBodyService.fetchAPI).toHaveBeenCalled();
		});

		it(`should fetch the artists and albums and assign to tabs`, function() {
			const sampleData = [
					{name: `artists`},
					{name: `albums`},
				];

			expect(this.ctrl.musicTabs).not.toBeDefined();
			this.ctrl.fetchAPI();
			defer.resolve(sampleData);
			this.$scope.$apply();
			expect(this.ctrl.musicTabs).toBeDefined();
			expect(this.ctrl.musicTabs.length).toEqual(2);
		});

		it(`should catch the error, if any`, function() {
			this.ctrl.fetchAPI();
			defer.reject({});
			this.$scope.$apply();
		});
	});

	describe(`fetchAlbum`, function() {
		it(`should call the album api using the service`, function() {
			this.ctrl.fetchAlbum({id: `abc`});
			expect(this.ctrl.AppBodyService.fetchAlbum).toHaveBeenCalledWith(`abc`);
		});

		it(`should fetch albums for the artist`, function() {
			const artist = {
				id: ``,
				albums: [],
			};
			const sampleData = [
				{name: `albms`},
			];
			expect(artist.albums.length).toEqual(0);
			this.ctrl.fetchAlbum(artist);
			defer.resolve(sampleData);
			this.$scope.$apply();
			expect(artist.albums.length).toBeGreaterThan(0);
			expect(artist.albums.length).toEqual(1);
		});

		it(`should catch the error, if any`, function() {
			this.ctrl.fetchAlbum({id: `abc`});
			defer.reject({});
			this.$scope.$apply();
		});
	});
});
