class AppHeaderController {
	constructor($scope, $element, $attrs, AppHeaderService) {
		'ngInject';

		this.name = 'appHeader';

		// refs
		this.$scope = $scope;
		this.$element = $element;
		this.$attrs = $attrs;
		this.AppHeaderService = AppHeaderService;
		this.isOpen = false;
		this.demo = {
        isOpen: false,
        count: 0,
        selectedDirection: 'left'
      };
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

export default AppHeaderController;
