class AppContentsController {
	constructor($scope, $element, $attrs, AppContentsService) {
		'ngInject';

		this.name = 'appContents';

		// refs
		this.$scope = $scope;
		this.$element = $element;
		this.$attrs = $attrs;
		this.AppContentsService = AppContentsService;
		console.log(this.tabContent, 'tabContent');
	}

	$onInit() {

	}

	$postLink() {
		// This is a hack to let md-content scroll inside the md-tabs
		const tabsWrapper = $('.app-content-display').find('md-tabs-content-wrapper');
		const tabsContent = tabsWrapper.find('md-tab-content');
		const tabsTemplate = tabsContent.find('div[md-tabs-template]');

		[tabsWrapper, tabsContent, tabsTemplate].forEach((content) => content.addClass('layout-column').addClass('flex'));
	}

	$onChanges() {

	}

	$onDestroy() {

	}
}

export default AppContentsController;
