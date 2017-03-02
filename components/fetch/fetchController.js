var app = angular.module("angularForm");
app.controller("fetchController", function($scope, $http, getDataFactory, $interval,$localStorage) {
    $scope.alertsuccess = false;
    $scope.alerterror = false;
    $scope.errmsg = '';
    $scope.count=0;
    $scope.pageNo=1;
    // timeout setting for refreshing data// fetching data from database
    // $interval( 
    $scope.loadData=function(){
        getDataFactory.getData( $localStorage.pageNo,$localStorage.token)
        .success(function(response) {
            console.log(response);
            $scope.list=response.data;
            console.log($scope.list);            
        })
        .error(function(error) {
            $scope.alerterror = true;
            $scope.errmsg = error;
        })        
    } 
    // 5000);
 
    //sorting table    
    $scope.sort = function(data){
        $scope.sortby=data;
        $scope.myOrderBy=data;
        $scope.count++;
        console.log(data)
        if($scope.count%2!=0){
            $scope.order='asc';
            $scope.reverse=false;            
            console.log($scope.sortby,$scope.myOrderBy, $scope.order, $scope.pageNo)
            getDataFactory.sortData($scope.sortby, $scope.order, $scope.pageNo)
            .success(function(response) {
                $scope.list=response.data;
                console.log($scope.list);
            })
            .error(function(error) {
                $scope.alerterror = true;
                $scope.errmsg = error;
            })   
        }
        else{
            $scope.order='desc';
            $scope.reverse=true;
             console.log($scope.sortby, $scope.order, $scope.pageNo)
            getDataFactory.sortData($scope.sortby, $scope.order, $scope.pageNo)
            .success(function(response) {
                $scope.list=response.data;
            })
            .error(function(error) {
                $scope.alerterror = true;
                $scope.errmsg = error;
            })   
        }            
    }; 
    $scope.loadData(); //call data to fetch for first time

});

    

   