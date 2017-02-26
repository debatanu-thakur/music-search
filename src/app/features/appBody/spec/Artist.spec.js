import Artist from '../models/Artist';

describe('Model: Artist', function() {
	beforeEach(function() {
		const artist = {
			id: `abc`,
			name: `feb`,
			images: [],
			genres: [],
			popularity: 100,
            albums: [{
                id: `abc`,
                name: `abc`,
            }],
		};
		this.artist = new Artist(artist);
	});

	it('should create blank artist when no parameters passed', function() {
		expect(new Artist()).toBeDefined();
	});

	it('should create artist when artist parameters passed', function() {
		expect(this.artist).toBeDefined();
		expect(this.artist.id).toBe(`abc`);
	});
});
