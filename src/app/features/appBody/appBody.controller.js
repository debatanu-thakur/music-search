class AppBodyController {
	constructor($scope, $element, $attrs, AppBodyService) {
		'ngInject';

		// refs
		this.$scope = $scope;
		this.$element = $element;
		this.$attrs = $attrs;
		this.AppBodyService = AppBodyService;
	}

	/**
	 * Fetch the api and get data for the searched query
	 */
	fetchAPI() {
		this.AppBodyService
		.fetchAPI(this.query)
		.then((resp) => {
			resp.forEach((item) => {
				item.getMoreDetails = item.name.toUpperCase() === 'ARTISTS' ?
					this.fetchAlbum.bind(this) : null;
			});
			this.musicTabs = resp;
			console.log(resp);
		}).catch((err) => err);
	}

	/**
	 * Fetch albums for artists
	 * @param {*} [artists]
	 */
	fetchAlbum(artist) {
		return this.AppBodyService
		.fetchAlbum(artist.id)
		.then((resp) => {
			artist.albums = resp;
		}).catch((err) => {
			// log error or do nothing
		});
	}
}

export default AppBodyController;
