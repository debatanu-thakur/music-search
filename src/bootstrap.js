/**
 * @name bootstrap
 *
 * @description
 * Loads the application on to DOM
 */
import angular from 'angular';
import './app/app.module';
import './app/app.scss';

const App = {};

App.start = startApp;

if (window) {
	/* Export app for browser */
	window.App = App;
}

/**
 * Starting point of the app
 * which is bootstraped to the HTML DOM
 */
function startApp() {
	loadApp();
}

function loadApp(language, translation) {
		angular
		.module('app.core');

    /**
     * NOTE: (petecorreia)
     * Use body instead of document to avoid issues
	 * with angular material and e2e test runners
     * See:
     * - https://github.com/angular/material/issues/5422
     * - https://github.com/karma-runner/karma/issues/422
     */

	const body = document.getElementsByTagName('body')[0];

	// Fire up the app
	angular.bootstrap(body, ['app']);
}

function loadTranslation(language) {
	return $.ajax({
		url: `assets/locales/${language}.json`,
		dataType: 'json',
	})
	.then(function(data) {
		console.log(data);
		return data;
	}, function(err) {
		// TODO: Handle this
		console.error('There was a problem with loading translations.');
	});
}

angular
	.element(document)
	.ready(window.App.start);

export default App;
