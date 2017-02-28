var app=angular.module('angularForm');  
app.factory('dataFactory', function($http){
    return{
        addData:function(newdata){
           return $http.post('http://144.76.34.244:3015/user/register', newdata)
           .success(function(response) {
           	console.log("response>>>>", response);
                    return response;
                })
                .error(function(error) {
                	console.log("error>>>>", error);
                    return error;

                })           
        },
        loginUser:function(data){
           return $http.post('http://144.76.34.244:3015/user/login', data)
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