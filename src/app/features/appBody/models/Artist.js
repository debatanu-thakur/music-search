import Album from './Album';
/**
 * Initialize artist data
 */
class ArtistResult {
    /**
     * Model for the Artist data
     * @param {string} id
     * @param {string} name
     * @param {*} [genres]
     * @param {*} [images]
     * @param {*} [albums]
     */
    constructor({
        id,
        genres,
        images, // this is for better to have
        name,
        albums,
        popularity,
    } = {}) {
        this.id = id;
        this.genres = genres;
        this.images = images;
        this.name = name;
        this.popularity = popularity;
        this.albums = !albums ? [] :
            albums.map((album) => new Album(album));
    }
};

export default ArtistResult;
