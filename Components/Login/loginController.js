var app = angular.module("angularForm");
app.controller("loginController", function($scope, $http, getdatafactory, $timeout, $localStorage) {
    $scope.alertloginsuccess = false;
    $scope.login = function(data) {
        getdatafactory.login(data)
            .success(function(response) {
                $localStorage.token = response.access_token
                $scope.alertloginsuccess = true;
                $scope.successmsg = response.messgae;
                $scope.form.$setPristine();
                $scope.user = {};
            })
            .error(function(error) {

            })

    }
})
