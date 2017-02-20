/**
 * @name appHeader.controller
 *
 * @description
 * Header app controller initializes the menu and toolbar
 */
class AppHeaderController {
	/**
	 * Initialize the app header contents
	 * @param {any} $scope - scope of the module
	 * @param {any} $element - element rendered from the componenet
	 * @param {any} $attrs - attributes passed to the component
	 * @param {angular.IService} AppHeaderService - the service for the component
	 */
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
        selectedDirection: 'left',
      };
	}

}

export default AppHeaderController;
