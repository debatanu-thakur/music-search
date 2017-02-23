import angular from 'angular';
import service from './appBody.service';
import component from './appBody.component';

import SearchBar from '../searchBar/searchBar.module';
import Content from '../appContentDisplay/appContentDisplay.module';

const appBodyModule = angular.module('appBody', [
	SearchBar.name,
	Content.name,
])
	.service('AppBodyService', service)
	.component('appBody', component);

export default appBodyModule;
