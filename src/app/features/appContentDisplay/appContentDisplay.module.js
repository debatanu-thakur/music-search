import angular from 'angular';
import service from './appContentDisplay.service';
import component from './appContentDisplay.component';

import AppContents from './appContents/appContents.module';

const appContentDisplayModule = angular.module('appContentDisplay', [
	AppContents.name,
])
	.service('AppContentDisplayService', service)
	.component('appContentDisplay', component);

export default appContentDisplayModule;
