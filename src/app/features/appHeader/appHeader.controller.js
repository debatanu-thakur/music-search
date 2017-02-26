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
	 */
	constructor($scope, $element, $attrs) {
		'ngInject';

		// refs
		this.$scope = $scope;
		this.$element = $element;
		this.$attrs = $attrs;
		this.isOpen = false;
		this.headerApp = {
        isOpen: false,
        count: 0,
        selectedDirection: 'left',
      };
	}

}

export default AppHeaderController;
