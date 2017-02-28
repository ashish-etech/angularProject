var app = angular.module("angularForm", []);
app.controller('angularFormController',function($scope, $http, $interval,$timeout, dataFactory) {
    $scope.Obj = {'alertSuccess':false, 'validationFailed':false,'alertPass':false,'errorMessage':''};
    $scope.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
// sending data to database
    $scope.submitForm = function(data) {
        dataFactory.addData(data)
            .success(function(response) {
                $scope.alertSuccess = true;
                $timeout(function() {
                     $scope.Obj={}; 
                $scope.userForm.$setPristine();
                }, 3000)
            })
            .error(function(response) {
                $scope.alertError = true;
                $scope.errorMessage = error;
            })
    }
    $scope.Onchange=function(){
        $scope.Obj.alertSuccess = false;
        $scope.Obj.validationFailed = false;
    };
});
app.controller('loginController',function($scope,dataFactory) {
     $scope.Obj = {'errorMessage':'','alertError':false};
$scope.login= function(data) {
        dataFactory.loginUser(data)
        .success(function(response) {
            $scope.Obj={}; 
            $scope.userForm.$setPristine();
        })
        .error(function(error) {
            $scope.alertError = true;
            $scope.errorMessage = error;
        })
    };
});