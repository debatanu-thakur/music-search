/**
 * @name app.controller
 *
 * @description
 * Initial entry for the app
 */
class AppController {
	/**
	 * Initialize the app contents
	 * @param {any} $scope - scope of the module
	 * @param {any} $element - element rendered from the componenet
	 * @param {any} $attrs - attributes passed to the component
	 * @param {angular.IService} AppService - the service for the component
	 */
	constructor($scope, $element, $attrs, AppService) {
		'ngInject';

		this.name = 'app';

		// refs
		this.$scope = $scope;
		this.$element = $element;
		this.$attrs = $attrs;
		this.AppService = AppService;
	}
}

export default AppController;
