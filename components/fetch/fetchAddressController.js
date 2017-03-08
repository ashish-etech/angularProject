var app = angular.module("angularForm");
app.controller("fetchaddressController", function($scope, $state, getDataFactory, $localStorage) {
    $scope.alertTableError = false;
    url = '/user/get/'
    getDataFactory.getData(url).get().$promise
        .then(function(response) {
                $scope.employees = response.data;
                for (var i = 0; i < response.data.length; i++) {
                    $scope.employees[i].address = JSON.parse(response.data[i].address)
                }
            },
            function(error) {}
        )
})
