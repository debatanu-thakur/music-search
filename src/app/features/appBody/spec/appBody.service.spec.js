import angular from 'angular';
import module from '../appBody.module';

describe('Service: AppBodyService', function() {
	let defer;

	beforeEach(angular.mock.module(module.name));

	// Providers
	beforeEach(angular.mock.module(function($provide) {
		$provide.service('BackendService', function($q) {
			defer = $q.defer();
			this.getMethod = jasmine.createSpy(`getMethod`)
				.and
				.returnValue(defer.promise);
		});
		$provide.constant('SEARCHAPI', {
			SEARCH_TYPE: {},
			SEARCH_URL: ``,
		});
	}));

	// Injections
	beforeEach(inject(function($injector, AppBodyService, $rootScope) {
		this.$scope = $rootScope.$new();
		this.service = AppBodyService;
	}));

	it('should be defined', function() {
		expect(this.service).toBeDefined();
	});

	describe(`callAPI`, function() {
		it(`calls the search api`, function() {
			const sampleData = {
				url: ``,
				query: ``,
				type: ``,
			};

			this.service.callAPI(sampleData);
			expect(this.service.BackendService.getMethod).toHaveBeenCalledWith({
				url: sampleData.url,
				params: {
					q: sampleData.query,
					type: sampleData.type,
				},
			});
		});
	});

	describe(`fetchAPI`, function() {
		beforeEach(function() {
			spyOn(this.service, `callAPI`).and.returnValue(defer.promise);
		});

		it(`should initialize and call the search api`, function() {
			this.service.fetchAPI();

			expect(this.service.callAPI).toHaveBeenCalled();
		});

		it(`should format and return the fetched data`, function() {
			let response;

			this.service.fetchAPI().then((resp) => {
				response = resp;
			});
			defer.resolve({
				data: {
					artists: {items: [{
						name: `abc`,
						id: `abc`,
					}]},
					albums: {items: [{
						name: `abc`,
						id: `abc`,
					}]},
				},
			});
			this.$scope.$apply();
			expect(response).toBeDefined();
			expect(response.length).toEqual(2);
		});
	});

	describe(`fetchAlbum`, function() {
		it(`should fetch the albums and return them`, function() {
			let response;

			this.service.fetchAlbum(`abc`).then((resp) => {
				response = resp;
			});
			defer.resolve({
				data: {
					items: [{
						id: 'alb',
						name: 'album',
					}],
				},
			});
			this.$scope.$apply();
			expect(response).toBeDefined();
			expect(response.length).toEqual(1);
		});
	});
});
