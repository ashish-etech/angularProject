var app = angular.module("angularForm");
app.controller("loginController", function($scope, $localStorage, $state, getDataFactory,$sessionStorage) {
    if ($localStorage.token) {
         $state.go('fetch');
    }
    else{
    $scope.login = function(data) {        
        url = "/user/login";
        getDataFactory.sendData(url).save(data).$promise
        .then(function(response) {
                $localStorage.token = response.token;
                $scope.form.$setPristine();
                $scope.user = {};
                $state.go('fetch');
            },
            function(error) {
                $scope.alertLoginError = true;
                $scope.loginErrrMsg = error.data;
            })
        }
    }
    $scope.change = function() {
        $scope.alertLoginError = false;
    }
});
