import angular from 'angular';
import component from './albumList.component';

const albumListModule = angular.module('albumList', [
])
	.component('albumList', component);

export default albumListModule;
