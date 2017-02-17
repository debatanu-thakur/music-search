/**
 * @ngdoc overview
 * @name bootstrap
 *
 * @description
 * Loads the application on to DOM
 */
import angular from 'angular';
import './app.module';
import './app.scss';

const App = {};

App.start = startApp;

if (window) {
	//Export app for browser
	window.App = App;
}

function startApp() {
	angular
		.module('app.core');

	// NOTE: (petecorreia)
	// Use body instead of document to avoid issues with angular material and e2e test runners
	// See:
	// - https://github.com/angular/material/issues/5422
	// - https://github.com/karma-runner/karma/issues/422
	const body = document.getElementsByTagName('body')[0];

	// Fire up the app
	angular.bootstrap(body, ['app']);
}

angular
	.element(document)
	.ready(window.App.start);

export default App;