var app = angular.module("angularForm");
app.controller("loginController", function($scope, $http, getDataFactory, $timeout, $localStorage, $state) {
    $scope.alertloginsuccess = false;
    $scope.alertLoginError = false;
    $scope.login = function(data) {
        url = "/user/login";
        getDataFactory.sendData(data, url)
            .success(function(response) {
                $localStorage.token = response.token;
                $scope.alertloginsuccess = true;
                $scope.successmsg = response.messgae;
                $scope.form.$setPristine();
                $scope.user = {};
                $state.go('fetch');

            })
            .error(function(error) {

                $scope.alertLoginError = true;
                $scope.loginErrrMsg = error;
            })

    }
    $scope.change = function() {
        $scope.alertLoginError = false;
    }
})
