import component from '../app.component';
import template from '../app.html';
import controller from '../app.controller';

describe('Component: app', function() {
	it('includes the intended template', () => {
		expect(component.template).toEqual(template);
	});

	it('invokes the right controller', () => {
		expect(component.controller).toEqual(controller);
	});
});
