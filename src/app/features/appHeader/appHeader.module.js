import angular from 'angular';
import service from './appHeader.service';
import component from './appHeader.component';

const appHeaderModule = angular.module('appHeader', [
])
	.service('AppHeaderService', service)
	.component('appHeader', component);

export default appHeaderModule;
