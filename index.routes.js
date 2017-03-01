var app = angular.module("angularForm", ['ui.router', 'ngStorage']);
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

})
