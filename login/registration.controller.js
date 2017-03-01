var app = angular.module("angularForm");
app.controller('registrationCtrl',function($scope,$timeout, dataFactory) {
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