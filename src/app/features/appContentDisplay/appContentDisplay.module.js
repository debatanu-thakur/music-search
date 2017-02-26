import angular from 'angular';
import component from './appContentDisplay.component';

import AppContents from './appContents/appContents.module';

const appContentDisplayModule = angular.module('appContentDisplay', [
	AppContents.name,
])
	.component('appContentDisplay', component);

export default appContentDisplayModule;
