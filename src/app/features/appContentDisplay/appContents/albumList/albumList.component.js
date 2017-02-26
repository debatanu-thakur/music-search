import template from './albumList.html';
import controller from './albumList.controller';

const albumListComponent = {
	template,
	controller,
	bindings: {
		name: '<',
		albums: '<',
	},
};

export default albumListComponent;
