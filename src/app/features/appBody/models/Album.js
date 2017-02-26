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
     * @param {array} [available_markets]
     */
    constructor({
        id,
        genres,
        images, // this is for better to have
        name,
        artists,
        available_markets,
    } = {}) {
        this.id = id;
        this.genres = genres;
        this.images = images;
        this.name = name;
        this.markets = available_markets;// eslint-disable-line
        this.artists = !artists ? [] :
            artists.map((album) => new Artist(album));
    }
};

export default AlbumResult;
