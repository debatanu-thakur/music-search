import angular from 'angular';
import service from './searchBar.service';
import component from './searchBar.component';

const searchBarModule = angular.module('searchBar', [
])
	.service('SearchBarService', service)
	.component('searchBar', component);

export default searchBarModule;
