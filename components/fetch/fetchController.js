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
        $scope.sort();
    };
    $scope.sort = function(data){
        $scope.sortby=data;
        $scope.myOrderBy=data;
        $scope.count++;          
        if($scope.count%2!=0){
            $scope.order='asc';
            $scope.reverse=false;
            url='/user/sort/' + $scope.sortby + '/' + $scope.order + '/'+ $scope.pageNo; 
            console.log($scope.pageNo)
            getDataFactory.getData(url)
            .success(function(response) {
                $scope.employees=response.data;
            })
            .error(function(error) {
                $scope.alerterror = true;
                $scope.errmsg = error;
            })   
        }
        else{
            $scope.order='desc';
            $scope.reverse=true;
            url='/user/sort/' + $scope.sortby + '/' + $scope.order + '/'+ $scope.pageNo;
            getDataFactory.getData(url)
            .success(function(response) {
                 $scope.employees=response.data;
            })
            .error(function(error) {
                $scope.alerterror = true;
                $scope.errmsg = error;
            })   
        }            
    };
    $scope.tableData();
    
    $scope.logOut = function() {
       $state.go("login");

   }
})
