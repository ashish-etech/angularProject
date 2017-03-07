var app = angular.module("angularForm", ['ui.router','ngResource', 'ngStorage', 'angularUtils.directives.dirPagination']);
app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('register', {
            url: '/register',
            templateUrl: 'components/registration/registrationForm.html',
            controller: 'registrationController',
        })
        .state('login', {
            url: '/login',
            templateUrl: 'components/login/loginForm.html',
            controller: 'loginController',
        })
        .state('fetch', {
            url: '/fetch',
            templateUrl: 'components/fetch/fetch.html',
            controller: 'fetchDataController',
        })
        
})
