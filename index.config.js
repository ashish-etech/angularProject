var app = angular.module("angularForm");
app.config(function ($httpProvider) {
  $httpProvider.interceptors.push('Interceptor');
});