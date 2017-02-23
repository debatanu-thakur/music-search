import template from './appContentDisplay.html';
import controller from './appContentDisplay.controller';

const appContentDisplayComponent = {
	template,
	controller,
	bindings: {
		musicTabs: '<',
		loadMore: '&',
	},
};

export default appContentDisplayComponent;
