/**
 * @name searchBar.controller
 * @description
 * Search bar controller
 */
class SearchBarController {
	/**
	 * Initializes the search bar controller
	 * @param {*} [SearchBarService]
	 */
	constructor(SearchBarService) {
		'ngInject';

		// refs
		this.SearchBarService = SearchBarService;
	}

	

	/**
	 * Toggle the search bar open and closing
	 */
	toggle() {
		this.isOpen = !this.isOpen;
	}

	/**
	 * Search with the query
	 */
	searchClick() {
		if (this.isOpen) {
			this.searchInitiate();
		} else {
			this.toggle();
		}
	}
}

export default SearchBarController;
