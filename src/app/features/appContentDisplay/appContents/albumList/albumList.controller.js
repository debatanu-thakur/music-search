class AlbumListController {
	constructor() {
		'ngInject';
	}

	fetchImage(item) {
		const image = item.images.length ? item.images[0].url : `https://placehold.it/350x150`;

		return image;
	}
}

export default AlbumListController;
