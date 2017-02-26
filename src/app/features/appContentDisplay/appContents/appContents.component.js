import template from './appContents.html';
import controller from './appContents.controller';

const appContentsComponent = {
	template,
	controller,
	bindings: {
		tabContent: '<',
		getMoreDetails: '&',
	},
};

export default appContentsComponent;
