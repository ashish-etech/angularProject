var app = angular.module("angularForm");

app.factory("getDataFactory", function(configuration, $resource) {

    return {

        getData: function(url) {

            return $resource(configuration.apihost + url)
        },
        sendData: function(url) {

            return $resource(configuration.apihost + url)
        },
        searchData:function(){

            return $resource(configuration.apihost + '/user/search/:keyword',{keyword:'@keyword'},{method:"GET"})
        }
    }
});
