import angular from 'angular';
import module from '../albumList.module';

describe('Controller: AlbumListController', function() {
	beforeEach(angular.mock.module(module.name));

	beforeEach(angular.mock.module(function($provide) {
	}));

	beforeEach(inject(function($rootScope, $componentController) {
		this.$scope = $rootScope.$new();

		this.ctrl = $componentController('albumList',
			{
				// locals
			},
			{
				// scope bindings
				name: ``,
				albums: [],
			}
		);
	}));

	it('should be defined', function() {
		expect(this.ctrl).toBeDefined();
	});

	describe(`fetchImage`, function() {
		it(`should send the first image in the images array of the album`,
		function() {
			const item = {
				images: [{
					url: `sampleurl`,
				}],
			};
			const imageURL = this.ctrl.fetchImage(item);

			expect(imageURL).toEqual(`sampleurl`);
		});

		it(`should send replacement image if album has no images`, function() {
			const item = {
				images: [],
			};
			const imageURL = this.ctrl.fetchImage(item);

			expect(imageURL).toEqual(this.ctrl.imageURL);
		});
	});
});
