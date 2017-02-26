import angular from 'angular';
import 'angular-material';
import 'angular-animate';
import 'angular-messages';
import 'angular-translate';
import 'angular-jk-rating-stars';



import backendService from './backendService/backendService.module';
/**
 * @name app.core
 *
 * @description
 * The core application module,
 * contents of this module are available to the whole app
 */
const coreModule = angular.module('app.core', [
	// Angular modules
	'ngMaterial',
	'ngMessages',
	'pascalprecht.translate',
	'jkAngularRatingStars',

	backendService.name,
]);

export default coreModule;
