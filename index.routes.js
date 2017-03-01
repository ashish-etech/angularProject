var app = angular.module("angularForm", ['ui.router', 'ngStorage']);
app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('register', {
            url: '/register',
            templateUrl: 'Components//Registration/registrationform.html',
            controller: 'registrationController',
        })

    .state('login', {
        url: '/login',
        templateUrl: 'Components/Login/login.html',
        controller: 'loginController',
    })

})
