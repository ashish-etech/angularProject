var app = angular.module("angularForm");
app.controller("registrationController", function($scope, $http, getdatafactory, $timeout) {
    $scope.alertsuccess = false;
    $scope.alerterror = false;
    $scope.errmsg = '';
    $scope.change = function() {
        $scope.alerterror = false;
    }
    $scope.submit = function(data) {
        getdatafactory.sendData(data)
            .success(function(response) {
                $scope.alertsuccess = true;

                $scope.form.$setPristine();
                $timeout(function() {
                    $scope.alertsuccess = false;
                    $scope.user = {};
                }, 3000)
            })
            .error(function(error) {
                $scope.alerterror = true;
                $scope.errmsg = error;
            })
    }
})
