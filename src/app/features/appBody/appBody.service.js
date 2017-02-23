import Album from './models/Album';
import Artist from './models/Artist';

/**
 * @name appBody.service
 * @description
 * The service for manipulating api data
 */
class AppBodyService {
	/**
	 * This is the initialization fo the app body service
	 * @param {*} [BackendService]
	 * @param {*} [SEARCHAPI]
	 */
	constructor(BackendService, SEARCHAPI) {
		this.BackendService = BackendService;
		this.SEARCHAPI = SEARCHAPI;
	}

	/**
	 * Fetch the search data from the spotify api
	 * and format it based on the artist and/or album
	 * @param {string} query
	 * @return {promise}
	 */
	fetchAPI(query) {
		return this.callAPI({
			url: this.SEARCHAPI.SEARCH_URL,
			query,
			type: this.SEARCHAPI.SEARCH_TYPE.all,
		}).then((response) => {
			const data = response.data;

			console.log('resp', response);
			return [
				{
					name: 'Artists',
					items: data.artists.items.map((artist) => new Artist(artist)),
				},
				{
					name: 'Albums',
					items: data.albums.items.map((album) => new Album(album)),
				},
			];
		});
		// catch error in controller and notify
		/**
		 * status code 429
		 * Retry-After in header gives the time after which we need to
		 * try again
		 */
	}

	/**
	 * Makes the api call with the respective parameters
	 * @param {string} url
	 * @param {string} query
	 * @param {string} type
	 * @return {promise}
	 */
	callAPI({url, query, type}) {
		const params = {
			q: query,
			type,
		};

		return this.BackendService.getMethod({
			url,
			params,
		});
	}
}

export default AppBodyService;
