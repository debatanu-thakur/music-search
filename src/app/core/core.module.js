import angular from 'angular';
import 'angular-material';
import 'angular-animate';
import 'angular-messages';
import 'angular-translate';

import config from './core.config';
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

	backendService.name,
])
    .config(config);

export default coreModule;
