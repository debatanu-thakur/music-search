import component from '../appBody.component';
import template from '../appBody.html';
import controller from '../appBody.controller';

describe('Component: appBody', function() {
	it('includes the intended template', () => {
		expect(component.template).toEqual(template);
	});

	it('invokes the right controller', () => {
		expect(component.controller).toEqual(controller);
	});
});
