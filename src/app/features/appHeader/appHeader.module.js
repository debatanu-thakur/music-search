import angular from 'angular';
import component from './appHeader.component';

const appHeaderModule = angular.module('appHeader', [
])
	.component('appHeader', component);

export default appHeaderModule;
