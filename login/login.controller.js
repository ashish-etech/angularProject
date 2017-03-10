var app = angular.module("angularForm");
app.controller('loginCtrl',function($scope,dataFactory) {
     $scope.user = {'errorMessage':'','alertError':false};
$scope.login= function(data) {
        dataFactory.loginData(data)
        .success(function(response) {
            $scope.token=response.access_token;
            console.log('$scope.token>>>>>',$scope.token);
            $scope.user={}; 
            $scope.form.$setPristine();
        })
        .error(function(error) {
            $scope.alertError = true;
            $scope.errorMessage = error;
        })
    };
});