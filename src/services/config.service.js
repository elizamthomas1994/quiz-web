angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'https://quiz-env.eba-npcppvfb.us-west-2.elasticbeanstalk.com/';

    return service;
}]);