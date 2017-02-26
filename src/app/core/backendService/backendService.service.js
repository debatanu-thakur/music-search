/**
 * @name backendService.service
 * @description
 * Contains the backend services for the app
 */
class BackendService {
    /**
     * Initializes the BackendService
     * @param {*} $http
     */
    constructor($http) {
        this.$http = $http;
    }

    /**
     * Executes a GET request
     * @param {string} url
     * @param {*} [params]
     * @param {*} [headers]
     * @return {promise}
     */
    getMethod({
        url,
        params,
        headers,
    }) {
        const method = 'get';

        return this.service({url, method, data: null, params, headers});
    }

    /**
     * Executes a POST request
     * @param {string} url
     * @param {*} [data]
     * @param {*} [params]
     * @param {*} [headers]
     * @return {promise}
     */
    postMethod({
        url,
        data,
        params,
        headers,
    }) {
        const method = 'post';

        return this.service({url, method, data, params, headers});
    }

    /**
     * Executes an HTTP request using Angular's native $http service
     * @param {string} url
     * @param {string} method
     * @param {*} [data]
     * @param {*} [params]
     * @param {*} [headers]
     * @return {promise}
     */
    service({
        url,
        method,
        data,
        params,
        headers,
    }) {
        return this.$http({
            method,
            url,
            params,
            data,
            headers,
        });
    }
}

export default BackendService;
