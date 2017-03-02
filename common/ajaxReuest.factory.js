var app = angular.module("angularForm");
app.factory('getDataFactory', function($http, configuration) {
    return {
        sendData: function(data) {               //registration
            return $http({
                    method: 'POST',
                    url: (configuration.apihost + '/user/register'),
                    data: data,
                    header: { 'Content - Type': 'text/html' }
                })
                .success(function(response){
                    return response;
                })
                .error(function(error) {
                    return error;
                })
        },
        login: function(loginData) {                    //login
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
        },
        getData: function(pageNo,token) {               //getData               
            return $http({
                    method: 'GET',
                    url: (configuration.apihost + '/user/list/' + pageNo +'?accessToken='+token),
                    header: { 'Content - Type': 'text/html' }
                })
                .success(function(response) {
                    return response;
                })
                .error(function(error) {
                    return error;
                })
        },
        sortData: function(sortby,order, pageNo){           //sorting                
            return $http({
                    method: 'GET',                                       
                    url: (configuration.apihost + '/user/sort/' + sortby + '/' + order + '/'+ pageNo),
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
