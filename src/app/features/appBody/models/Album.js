import Artist from './Artist';
/**
 * Initialize album data
 */
class AlbumResult {
    /**
     * Model for the Album data
     * @param {string} id
     * @param {*} [genres]
     * @param {string} name
     * @param {*} [artists]
     * @param {*} [images]
     */
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

export default AlbumResult;
