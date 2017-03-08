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
                    $scope.alertAddressuccess = true;
                    $scope.addressSuccessMsg = response.messgae;
                    $scope.form.$setPristine();
                    $state.go('fetch');
                },
                function(error) {
                    $scope.alertAddresserror = true;
                    $scope.addressErrMsg = error.data;
                }
            )
    }
})
