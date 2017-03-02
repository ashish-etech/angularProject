var app = angular.module("angularForm");
app.controller("loginController", function($scope, $http, getDataFactory, $timeout, $localStorage, $state) {
    $scope.alertloginsuccess = false;
    $scope.pageNo=1;
    $scope.login = function(data) {
        getDataFactory.login(data)
        .success(function(response) {
            $localStorage.token = response.token                
            $scope.alertloginsuccess = true;
            $scope.successmsg = response.messgae;
            $scope.form.$setPristine();
            $scope.user = {};
            $state.go('dashboard');                
        })
        .error(function(error) {
            $scope.alerterror = true;
            $scope.errmsg = error;
        })
    }
})
