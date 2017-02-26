import Album from '../models/Album';

describe('Model: Album', function() {
	beforeEach(function() {
		const artist = {
			id: `abc`,
			name: `feb`,
			images: [],
			genres: [],
			popularity: 100,
            albums: [],
		};
		const album = {
			id: `abc`,
			name: `feb`,
			images: [],
			genres: [],
			artists: [artist],
		};

		this.album = new Album(album);
	});

	it('should not create blank album when no parameters passed', function() {
		expect(new Album()).toBeDefined();
	});

	it('should create album when album parameters passed', function() {
		expect(this.album).toBeDefined();
		expect(this.album.id).toBe(`abc`);
	});
});
