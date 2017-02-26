/**
 * @name appBody.controller
 * @description
 * The entry for the appBody component
 */
class AppBodyController {
	/**
	 * This is initializes the appBody controller
	 * @param {*} AppBodyService
	 */
	constructor(AppBodyService) {
		'ngInject';

		// refs
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
		}).catch((err) => err);
	}

	/**
	 * Fetch albums for artists
	 * @param {*} [artist]
	 * @return {promise}
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
