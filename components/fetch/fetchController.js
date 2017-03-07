var app = angular.module("angularForm");
app.controller("fetchDataController", function($scope, $state, getDataFactory, $localStorage) {
    $scope.alertTableError = false;
    $scope.currentPage = 1;
    $scope.pageNo = 1;
    $scope.countClickOnSort = 0;
    $scope.tableData = function() {
        url = '/user/list/' + $scope.pageNo;
        getDataFactory.getData(url).get().$promise
            .then(function(response) {
                    $scope.employees = response.data;
                    $scope.count = response.count;
                },
                function(error) {

                }
            )
    }
    $scope.pageChanged = function(value) {
        $scope.pageNo = value;
        if ($scope.countClickOnSort == 0) {
            $scope.tableData();
        } else {
            url = '/user/sort/' + $scope.sortby + '/' + $scope.order + '/' + $scope.pageNo;
            getDataFactory.getData(url).get().$promise
                .then(function(response) {
                        $scope.employees = response.data
                    },
                    function(error) {
                        $scope.alerterror = true;
                        $scope.errmsg = error;
                    }
                )
        }

    };
    $scope.sort = function(data) {
        $scope.sortby = data;
        $scope.myOrderBy = data;
        $scope.countClickOnSort++;
        if ($scope.countClickOnSort % 2 != 0) {
            $scope.order = 'asc';
            $scope.reverse = false;
            url = '/user/sort/' + $scope.sortby + '/' + $scope.order + '/' + $scope.pageNo;
            getDataFactory.getData(url).get().$promise
                .then(function(response) {
                        $scope.employees = response.data;
                    },
                    function(error) {
                        $scope.alerterror = true;
                        $scope.errmsg = error;
                    }
                )
        } else {
            $scope.order = 'desc';
            $scope.reverse = true;
            url = '/user/sort/' + $scope.sortby + '/' + $scope.order + '/' + $scope.pageNo;
            getDataFactory.getData(url).get().$promise
                .then(function(response) {
                        $scope.employees = response.data;
                    },
                    function(error) {
                        $scope.alerterror = true;
                        $scope.errmsg = error;
                    }
                )

        }
    };
    $scope.change=function(){
        if (!$scope.input){
            $scope.tableData();

        }
        else{console.log($scope.input);
            getDataFactory.searchData().get({keyword:$scope.input}).$promise 
            .then(function(response) {
                $scope.alerterror = false;
                console.log(response)
                $scope.employees = response.users;
                $scope.count = response.count;
            },function(error) {
                console.log(error)
                $scope.alerterror = true;
                $scope.employees = '';
                $scope.tableerrmsg=error.data;
                if(error.data==TokenExpiredError){
                    $state.go("login");
                }
                
            })
        }
    }

    $scope.tableData();

    $scope.logOut = function() {
        $localStorage = null;
        $state.go("login");
    }
})
