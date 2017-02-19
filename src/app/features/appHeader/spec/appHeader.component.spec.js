import component from '../appHeader.component';
import template from '../appHeader.html';
import controller from '../appHeader.controller';

describe('Component: appHeader', function() {
	it('includes the intended template', () => {
		expect(component.template).toEqual(template);
	});

	it('invokes the right controller', () => {
		expect(component.controller).toEqual(controller);
	});
});
