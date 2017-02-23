class AppContentDisplayController {
	constructor($scope, $element, $attrs, AppContentDisplayService) {
		'ngInject';

		this.name = 'appContentDisplay';

		// refs
		this.$scope = $scope;
		this.$element = $element;
		this.$attrs = $attrs;
		this.AppContentDisplayService = AppContentDisplayService;
	}

	$onInit() {

	}

	$postLink() {

	}

	$onChanges() {

	}

	$onDestroy() {

	}
}

export default AppContentDisplayController;
