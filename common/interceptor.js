var app = angular.module("angularForm");
app.factory('Interceptor', function($localStorage) {
    return {
        request: function(config) {
            if ($localStorage.token) {
                if (config.url == 'angularUtils.directives.dirPagination.template') {
                    config.url = config.url
                } else {
                    config.url = config.url + '?accessToken=' + $localStorage.token;
                }
            }
            return config;
        },
        response: function(res) {
            return res;
        }
    }
});
