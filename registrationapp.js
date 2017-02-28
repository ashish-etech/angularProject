var app = angular.module("angularForm", []);
app.controller("registerCtrl", function($scope, $http, getdatafactory, $timeout) {
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
});
app.controller("loginCtrl", function($scope, $http, getdatafactory, $timeout) {
    $scope.alertsuccess1 = false;
    $scope.login = function(data) {
        getdatafactory.login(data)
            .success(function(response) {
                $scope.alertsuccess1 = true;
                $scope.successmsg = response.messgae;
                $scope.form.$setPristine();
                $scope.user = {};
            })
            .error(function(error) {

            })

    }
})
