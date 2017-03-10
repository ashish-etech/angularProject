var app=angular.module('angularForm');  
app.factory('dataFactory', function($http, configuration){
    return{
        addData:function(newdata){
           return $http.post(configuration.apihost + '/user/register', newdata)
           .success(function(response) {
           	console.log("response>>>>", response);
                    return response;
                })
                .error(function(error) {
                	console.log("error>>>>", error);
                    return error;

                })           
        },
        loginData:function(data){
           return $http.post(configuration.apihost + '/user/login', data)
           .success(function(response) {
           	console.log("response>>>>", response);
                    return response;
                })
                .error(function(error) {
                	console.log("error>>>>", error);
                    return error;

                })              
        }

    };    
});