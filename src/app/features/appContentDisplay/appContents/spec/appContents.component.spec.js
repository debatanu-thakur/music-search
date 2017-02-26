import component from '../appContents.component';
import template from '../appContents.html';
import controller from '../appContents.controller';

describe('Component: appContents', function() {
	it('includes the intended template', () => {
		expect(component.template).toEqual(template);
	});

	it('invokes the right controller', () => {
		expect(component.controller).toEqual(controller);
	});
});
