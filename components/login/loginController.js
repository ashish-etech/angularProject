var app = angular.module("angularForm");
app.controller("loginController", function($scope, $http, getDataFactory, $timeout, $localStorage) {
    $scope.alertloginsuccess = false;
    $scope.login = function(data) {
        getDataFactory.login(data)
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
