class AppBodyService {
	constructor(BackendService, SEARCHAPI) {
		this.BackendService = BackendService;
		this.SEARCHAPI = SEARCHAPI;
	}

	/**
	 *
	 */
	fetchAPI(query) {
		return this.callAPI({
			url: this.SEARCHAPI.SEARCH_URL,
			query,
			type: this.SEARCHAPI.SEARCH_TYPE.all,
		}).then((response) => {
			console.log('resp', response);
		});
		// catch error in controller and notify
		/**
		 * status code 429
		 * Retry-After in header gives the time after which we need to
		 * try again
		 */
	}

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
