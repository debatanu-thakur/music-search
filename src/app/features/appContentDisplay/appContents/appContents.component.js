import template from './appContents.html';
import controller from './appContents.controller';

const appContentsComponent = {
	template,
	controller,
	bindings: {
		tabContent: '<',
	},
};

export default appContentsComponent;
