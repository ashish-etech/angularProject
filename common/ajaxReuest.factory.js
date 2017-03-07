var app = angular.module("angularForm");
app.factory('getDataFactory', function(configuration, $resource) {
    return {
        sendData:function(url){
            console.log(url)
            return $resource(configuration.apihost + url,{})
        },                            
        getData: function(url) {    
        console.log(url)         
            return $resource(configuration.apihost + url,{})                
        },
        searchData:function(){
            return $resource(configuration.apihost + '/user/search/:keyword',{keyword:'@keyword'})
        }
    }
});
