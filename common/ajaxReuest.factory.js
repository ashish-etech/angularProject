var app = angular.module("angularForm");
app.factory('getDataFactory', function($http, configuration) {
    return {
        sendData: function(data) {
            return $http({
                    method: 'POST',
                    url: (configuration.apihost + '/user/register'),
                    data: data,
                    header: { 'Content - Type': 'text/html' }
                })
                .success(function(response) {
                    return response;
                })
                .error(function(error) {
                    return error;

                })
        },
        login: function(loginData) {
            return $http({
                    method: 'POST',
                    url: (configuration.apihost + '/user/login'),
                    data: loginData,
                    header: { 'Content - Type': 'text/html' }
                })
                .success(function(response) {

                    return response;
                })
                .error(function(error) {
                    return error;

                })

        }
    }
});
