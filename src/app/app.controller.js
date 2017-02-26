/**
 * @name app.controller
 *
 * @description
 * Initial entry for the app
 */
class AppController {
	/**
	 * Initialize the app contents
	 * @param {angular.IService} AppService - the service for the component
	 */
	constructor(AppService) {
		'ngInject';

		// refs
		this.AppService = AppService;
	}
}

export default AppController;
