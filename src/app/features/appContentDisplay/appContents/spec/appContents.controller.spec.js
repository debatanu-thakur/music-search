import angular from 'angular';
import module from '../appContents.module';

describe('Controller: AppContentsController', function() {
	beforeEach(angular.mock.module(module.name));

	beforeEach(angular.mock.module(function($provide) {
		$provide.service('$mdPanel', function($q) {
			this.open = jasmine.createSpy('open').and.returnValue($q.resolve({}));
			this.newPanelAnimation = () => this;
			this.newPanelPosition = () => this;
			this.absolute = () => this;
			this.center = () => this;
			this.openFrom = () => this;
			this.duration = () => this;
			this.closeTo = () => this;
			this.withAnimation = () => this;
			this.animation = {
				FADE: '',
			};
		});
	}));

	beforeEach(inject(function($rootScope, $componentController, _$q_) {
		this.$scope = $rootScope.$new();

		this.ctrl = $componentController('appContents',
			{
				// locals
				$element: [{}],
			},
			{
				// scope bindings
				tabContents: [],
				getMoreDetails: jasmine.createSpy(`getMoreDetails`)
					.and
					.returnValue(_$q_.resolve({})),
			}
		);
	}));

	it('should be defined', function() {
		expect(this.ctrl).toBeDefined();
	});

	describe(`fetchImage`, function() {
		it(`should send the first image in the images array of the item`,
		function() {
			const item = {
				images: [{
					url: `sampleurl`,
				}],
			};
			const imageURL = this.ctrl.fetchImage(item);

			expect(imageURL).toEqual(`sampleurl`);
		});

		it(`should send replacement image if item has no images`, function() {
			const item = {
				images: [],
			};
			const imageURL = this.ctrl.fetchImage(item);

			expect(imageURL).toEqual(this.ctrl.imageURL);
		});
	});

	describe(`getArtists`, function() {
		it(`should fetch the artists from the item`, function() {
			const item = {
				artists: [
					{name: `led zep`},
					{name: `beyonce`},
				],
			};
			const artists = this.ctrl.getArtists(item);

			expect(artists).toEqual(`led zep, beyonce`);
		});

		it(`should return undefined when item has no artits`, function() {
			const item = {};
			const artists = this.ctrl.getArtists(item);

			expect(artists).toEqual(undefined);
		});
	});

	describe(`callItem`, function() {
		const item ={};

		beforeEach(function() {
			item.name = ``;
			item.albums = [];
			this.ctrl.callItem(item, {});
		});

		it(`fetch album info for that artist`, function() {
			expect(this.ctrl.getMoreDetails).toHaveBeenCalledWith({
				value: item,
			});
		});

		it(`opens the dialog box after fetching the album info`, function() {
			this.$scope.$apply();
			expect(this.ctrl.$mdPanel.open).toHaveBeenCalled();
		});
	});

	describe(`$postLink`, function() {
		it(`should call md-content hack to attach layout class`, function() {
			this.ctrl.$postLink();
		});
	});
});
