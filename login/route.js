var app = angular.module("angularForm", ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/login');
    
    $stateProvider
    .state('registration', {
        url: '/registration',
        templateUrl: 'registration.html',
         controller: 'registrationCtrl'
    })
    .state('login', {
        url: '/login',
        templateUrl: 'login.html',
        controller: 'loginCtrl'
    })

});