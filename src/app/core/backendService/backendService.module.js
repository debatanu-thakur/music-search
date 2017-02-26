import angular from 'angular';

import service from './backendService.service';

/**
 * @name app.backendService
 *
 * @description
 * The app backend service
 */
const backendModule = angular.module('app.backendService', [
])
    .service('BackendService', service);

export default backendModule;
