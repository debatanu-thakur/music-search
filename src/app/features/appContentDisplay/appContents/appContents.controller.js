import $ from 'jquery';
/**
 * @name appContents.controller
 * @description
 * This is the entry to the appContents component
 */
class AppContentsController {
    /**
     * Initializes the appContents component
     * @param {*} $element
     * @param {*} $mdPanel
     */
    constructor($element, $mdPanel) {
        'ngInject';

        // refs
        this.$element = $element;
        this.$mdPanel = $mdPanel;
        this.imageURL = `//placehold.it/350x150`;
    }

    /**
     * This is called post the element is initialized
     */
    $postLink() {
        // This is a hack to let md-content scroll inside the md-tabs
        const tabsWrapper = $('.app-content-display')
            .find('md-tabs-content-wrapper');
        const tabsContent = tabsWrapper.find('md-tab-content');
        const tabsTemplate = tabsContent.find('div[md-tabs-template]');

        [tabsWrapper, tabsContent, tabsTemplate].forEach((content) => {
            content.addClass('layout-column').addClass('flex');
        });
    }

    /**
     * Fetch the image or empty image based on whether item has image
     * @param {*} item
     * @return {string}
     */
    fetchImage(item) {
        const image = item.images.length ? item.images[0].url : this.imageURL;

        return image;
    }

    /**
     * Fetch more details on click, such as album info for that artists
     * @param {*} item
     * @param {*} $event
     */
    callItem(item, $event) {
        this.getMoreDetails({
                value: item,
            })
            .then(() => {
                const position = this.$mdPanel.newPanelPosition()
                    .absolute()
                    .center();
                const animation = this.$mdPanel.newPanelAnimation()
                    .openFrom($event)
                    .duration(337)
                    .closeTo(this.$element)
                    .withAnimation(this.$mdPanel.animation.FADE);
                this.$mdPanel.open({
                    template: `<album-list name="name" 
                        albums="albums" 
                        layout="column" 
                        flex class="album-list">
                        </album-list>`,
                    attachTo: angular.element(document.body),
                    clickOutsideToClose: true,
                    escapeToClose: true,
                    locals: {
                        name: item.name,
                        albums: item.albums,
                    },
                    controller: function($scope, name, albums) {
                        Object.assign($scope, {
                            name,
                            albums,
                        });
                    },
                    position,
                    animation,
                    trapFocus: true,
                    hasBackdrop: true,
                }).then((resp) => {
                    const element = $('.md-panel');
                    element
                        .addClass('panel-list-wrapper')
                        .addClass('layout-column')
                        .addClass('flex');
                });
            });
    }

    /**
     * Fetch the artists for that album
     * @param {*} item
     * @return {string}
     */
    getArtists(item) {
        return item.artists && item.artists
            .map((artist) => artist.name)
            .join(', ');
    }

}

export default AppContentsController;
