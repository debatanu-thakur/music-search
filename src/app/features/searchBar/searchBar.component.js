import template from './searchBar.html';
import controller from './searchBar.controller';

const searchBarComponent = {
	template,
	controller,
	bindings: {
		query: '=',
		searchInitiate: '&',
	},
};

export default searchBarComponent;
