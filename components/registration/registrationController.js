var app = angular.module("angularForm");
app.controller("registrationController", function($scope, $http, getDataFactory, $timeout, $state) {
    $scope.alertsuccess = false;
    $scope.alerterror = false;
    $scope.errmsg = '';
    $scope.change = function() {
        $scope.alerterror = false;
    }
    $scope.submit = function(data) {
        url = "/user/register";
        getDataFactory.sendData(url).save(data).$promise
            .then(function(response) {
                    $scope.alertsuccess = true;
                    $scope.form.$setPristine();
                    $timeout(function() {
                        $scope.alertsuccess = false;
                        $scope.user = {};
                        $state.go('login');
                    }, 3000)
                },
                function(error) {
                    $scope.alerterror = true;
                    $scope.errmsg = error;
                }
            )
    }
})
