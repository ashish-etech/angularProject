var app = angular.module("angularForm", []);
app.controller('registerCtrl',function($scope, $http, $interval,$timeout, dataFactory) {
    $scope.user = {'alertsuccess':false, 'validationFailed':false,'alertmsg':false,'alerterror':false};
    
// sending data to database
    $scope.submit = function(data) {
        dataFactory.addData(data)
            .success(function(response) {
                $scope.alertsuccess = true;
                $timeout(function() {
                $scope.user={}; 
                $scope.alertsuccess = false;
                $scope.form.$setPristine();
                }, 3000)
            })
            .error(function(error) {
                $scope.alerterror = true;
                $scope.errmessage = error;
            })
    }
    $scope.Onchange=function(){
        $scope.Obj.alertsuccess = false;
        $scope.Obj.validationFailed = false;
    };
});
app.controller('loginCtrl',function($scope,dataFactory) {
     $scope.user = {'errorMessage':'','alertError':false};
$scope.login= function(data) {
        dataFactory.loginData(data)
        .success(function(response) {
            $scope.user={}; 
            $scope.form.$setPristine();
        })
        .error(function(error) {
            $scope.alertError = true;
            $scope.errorMessage = error;
        })
    };
});