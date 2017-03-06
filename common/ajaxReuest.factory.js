var app = angular.module("angularForm");

app.factory("getDataFactory", function($resource, configuration) {

    return {

        getData: function(url) {

            return $resource(configuration.apihost + url)
        },
        sendData: function(url) {

            return $resource(configuration.apihost + url)
        },
    }
});
