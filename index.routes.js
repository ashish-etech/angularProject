var app = angular.module("angularForm", ['ui.router', 'ngStorage', 'angularUtils.directives.dirPagination', 'ngResource']);
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
        .state('update', {
            url: '/update',
            templateUrl: 'components/address/addAddress.html',
            controller: 'addAddressController',
        })
        .state('fetchaddress', {
            url: '/address',
            templateUrl: 'components/fetch/fetchAddress.html',
            controller: 'fetchaddressController',

        })
})
