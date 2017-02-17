import angular from 'angular';

import AppCore from './core/core.module';

import service from './app.service';
import component from './app.component';

import AppHeader from './features/appHeader/appHeader.module';

const appModule = angular.module('app', [
	AppCore.name,
	AppHeader.name,
])
	.service('AppService', service)
	.component('app', component);

export default appModule;
