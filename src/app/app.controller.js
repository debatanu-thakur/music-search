class AppController {
	constructor($scope, $element, $attrs, AppService) {
		'ngInject';

		this.name = 'app';

		// refs
		this.$scope = $scope;
		this.$element = $element;
		this.$attrs = $attrs;
		this.AppService = AppService;
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

export default AppController;
