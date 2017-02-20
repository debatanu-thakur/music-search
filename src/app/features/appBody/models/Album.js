import Artist from './Artist';
/**
 * Initialize album data
 */
class AlbumResult {
    constructor({
        id,
        genres,
        images, // this is for better to have
        name,
        artists,
    }) {
        this.id = id;
        this.genres = genres;
        this.images = images;
        this.name = name;
        this.artists = !artists ? [] :
            artists.map((album) => new Artist(album));
    }
};

export default ArtistResult;
