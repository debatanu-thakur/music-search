import angular from 'angular';
import service from './appContents.service';
import component from './appContents.component';

const appContentsModule = angular.module('appContents', [
])
	.service('AppContentsService', service)
	.component('appContents', component);

export default appContentsModule;
