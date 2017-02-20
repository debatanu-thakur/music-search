import angular from 'angular';

import AppCore from './core/core.module';

import service from './app.service';
import component from './app.component';
import constants from './app.constants';

import AppHeader from './features/appHeader/appHeader.module';
import AppBody from './features/appBody/appBody.module';

/**
 * App module
 */
const appModule = angular.module('app', [
	AppCore.name,
	AppBody.name,
	AppHeader.name,
])
	.constant('SEARCHAPI', constants)
	.service('AppService', service)
	.component('app', component);

export default appModule;
