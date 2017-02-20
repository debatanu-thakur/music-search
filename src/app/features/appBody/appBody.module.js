import angular from 'angular';
import service from './appBody.service';
import component from './appBody.component';

import SearchBar from '../searchBar/searchBar.module';

const appBodyModule = angular.module('appBody', [
	SearchBar.name,
])
	.service('AppBodyService', service)
	.component('appBody', component);

export default appBodyModule;
