var app = angular.module("angularForm");
app.controller("loginController", function($scope, $http, getDataFactory, $timeout, $localStorage, $state) {
    $scope.alertloginsuccess = false;
    $scope.login = function(data) {
        url = "/user/login";
        getDataFactory.login(data, url)
            .success(function(response) {
                $localStorage.token = response.token;
                $scope.alertloginsuccess = true;
                $scope.successmsg = response.messgae;
                $scope.form.$setPristine();
                $scope.user = {};
                $state.go('fetch');

            })
            .error(function(error) {

            })

    }
})
