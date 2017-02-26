/**
 * @name searchBar.controller
 * @description
 * Search bar controller
 */
class SearchBarController {
	/**
	 * Initializes the search bar controller
	 */
	constructor() {
		'ngInject';

		// refs
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
			if ($.trim(this.query)==='') {
				return;
			}
			this.searchInitiate();
		} else {
			this.toggle();
		}
	}
}

export default SearchBarController;
