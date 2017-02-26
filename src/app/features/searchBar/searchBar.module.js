import angular from 'angular';
import component from './searchBar.component';

const searchBarModule = angular.module('searchBar', [
])
	.component('searchBar', component);

export default searchBarModule;
