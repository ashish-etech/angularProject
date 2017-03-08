var app = angular.module("angularForm");
app.controller("addAddressController", function($scope, getDataFactory, $timeout, $state) {
    $scope.alertAddressuccess = false;
    $scope.alertAddresserror = false;
    $scope.addressErrMsg = '';
    $scope.addressSuccessMsg = '';

    $scope.addAddress = function(data) {
        url = "/user/address";
        getDataFactory.sendData(url).save(data).$promise
            .then(function(response) {
                    console.log(">>>>>>>>>>>>>......", response);
                    $scope.alertAddressuccess = true;
                    $scope.addressSuccessMsg = response.messgae;
                    $scope.form.$setPristine();
                    $timeout(function() {
                        $scope.alertAddressuccess = false;
                        $scope.user = {};
                        $state.go('fetch');
                    }, 3000)
                },
                function(error) {
                    console.log(">>>>>>>>>>>>>>>>>>>>>>.error is", error)
                    $scope.alertAddresserror = true;
                    $scope.addressErrMsg = error.data;
                }
            )
    }
})
