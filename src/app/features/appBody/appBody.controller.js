class AppBodyController {
	constructor($scope, $element, $attrs, AppBodyService) {
		'ngInject';

		this.name = 'appBody';

		// refs
		this.$scope = $scope;
		this.$element = $element;
		this.$attrs = $attrs;
		this.AppBodyService = AppBodyService;
	}

	$onInit() {

	}

	/**
	 * Fetch the api and get data for the searched query
	 */
	fetchAPI() {
		this.AppBodyService
		.fetchAPI(this.query)
		.then((resp) => {
			this.musicTabs = resp;
			console.log(resp);
		}).catch((err) => err);
	}
}

export default AppBodyController;
