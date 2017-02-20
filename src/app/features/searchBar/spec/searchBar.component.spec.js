import component from '../searchBar.component';
import template from '../searchBar.html';
import controller from '../searchBar.controller';

describe('Component: searchBar', function() {
	it('includes the intended template', () => {
		expect(component.template).toEqual(template);
	});

	it('invokes the right controller', () => {
		expect(component.controller).toEqual(controller);
	});
});
