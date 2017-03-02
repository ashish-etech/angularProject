var app = angular.module("angularForm");
app.controller("fetchDataController", function($scope, $state, getDataFactory, $localStorage) {
    $scope.alertTableError = false;
    $scope.currentPage = 1;
    $scope.pageNo = 1;
    $scope.tableData = function() {
        url = '/user/list/' + $scope.pageNo + '?accessToken=' + $localStorage.token;
        getDataFactory.fetch(url).success(function(response) {
                $scope.employees = response.data;
                $scope.count = response.count;
            })
            .error(function(error) {
                $scope.alerttableerror = true;
                $scope.tableerrmsg = error;

            });
    }
    $scope.pageChanged = function(value) {
        $scope.pageNo = value;
        $scope.tableData();
    }
    $scope.tableData();



})
