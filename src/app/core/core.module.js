import angular from 'angular';
import 'angular-material';
import 'angular-animate';
import 'angular-messages';

import config from './core.config';
/**
 * @ngdoc overview
 * @name _core
 *
 * @description
 * The core application module,
 * contents of this module are available to the whole app
 */
const coreModule = angular.module('app.core', [
	// Angular modules
	'ngMaterial',
	'ngMessages',
])
    .config(config);

export default coreModule;
