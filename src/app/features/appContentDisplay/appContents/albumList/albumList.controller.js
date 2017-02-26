/**
 * @name albumList.controller
 * @description
 * This is the entry to the albumList component
 */
class AlbumListController {
	/**
	 * Initializes the albumList controller
	 */
	constructor() {
		'ngInject';
		this.imageURL = `//placehold.it/350x150`;
	}

	/**
	 * Fetch the first image from the album images
	 * @param {*} [item]
	 * @return {string}
	 */
	fetchImage(item) {
		const image = item.images.length ? item.images[0].url : this.imageURL;

		return image;
	}
}

export default AlbumListController;
