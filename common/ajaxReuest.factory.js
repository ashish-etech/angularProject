var app = angular.module("angularForm");
app.factory('getDataFactory', function($http, configuration) {
    return {
        sendData: function(data, api) {
            return $http({
                    method: 'POST',
                    url: (configuration.apihost + api),
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


        getData: function(api) {
            return $http({
                    method: 'GET',
                    url: (configuration.apihost + api),
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
