import component from '../albumList.component';
import template from '../albumList.html';
import controller from '../albumList.controller';

describe('Component: albumList', function() {
	it('includes the intended template', () => {
		expect(component.template).toEqual(template);
	});

	it('invokes the right controller', () => {
		expect(component.controller).toEqual(controller);
	});
});
