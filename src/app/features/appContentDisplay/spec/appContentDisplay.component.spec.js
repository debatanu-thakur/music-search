import component from '../appContentDisplay.component';
import template from '../appContentDisplay.html';
import controller from '../appContentDisplay.controller';

describe('Component: appContentDisplay', function() {
	it('includes the intended template', () => {
		expect(component.template).toEqual(template);
	});

	it('invokes the right controller', () => {
		expect(component.controller).toEqual(controller);
	});
});
