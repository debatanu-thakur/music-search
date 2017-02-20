import Album from 'Album';
/**
 * Initialize artist data
 */
class ArtistResult {
    constructor({
        id,
        genres,
        images, // this is for better to have
        name,
        albums,
    }) {
        this.id = id;
        this.genres = genres;
        this.images = images;
        this.name = name;
        this.albums = !albums ? [] :
            albums.map((album) => new Album(album));
    }
};

export default ArtistResult;
