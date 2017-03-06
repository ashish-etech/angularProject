var app = angular.module("angularForm");
app.controller("loginController", function($scope, $localStorage, $state, getDataFactory) {
    $scope.login = function(data) {
        url = "/user/login";
        getDataFactory.sendData(url).save(data).$promise
            .then(function(response) {
                    $localStorage.token = response.token;
                    $state.go('fetch');
                },
                function(error) {
                    $scope.alertLoginError = true;
                    $scope.loginErrrMsg = error.data;
                }
            )
    }
    $scope.change = function() {
        $scope.alertLoginError = false;
    }
});
