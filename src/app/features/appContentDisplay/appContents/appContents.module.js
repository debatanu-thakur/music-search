import angular from 'angular';
import component from './appContents.component';

import AlbumList from './albumList/albumList.module';

const appContentsModule = angular.module('appContents', [
	AlbumList.name,
])
	.component('appContents', component);

export default appContentsModule;
