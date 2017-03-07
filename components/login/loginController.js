var app = angular.module("angularForm");
app.controller("loginController", function($scope, $http, getDataFactory, $localStorage, $state,$resource) {
    $scope.alertloginsuccess = false;
    $scope.alertLoginError = false;

    if ($localStorage.token) {
         $state.go('fetch');
    }
    else{
        $scope.login = function(data) {
            url = '/user/login';
            getDataFactory.sendData(url).save(data).$promise
            .then(function(response) {
                $localStorage.token = response.token;
                console.log(response)
                $scope.alertloginsuccess = true;
                $scope.successmsg = response.messgae;
                $scope.form.$setPristine();
                $scope.user = {};
                $state.go('fetch');
            },function(error) {
                 console.log(error.statusText)
                 console.log(error)
                $scope.alertLoginError = true;
                $scope.loginErrrMsg =error.data;
            })
        }
    }    
})