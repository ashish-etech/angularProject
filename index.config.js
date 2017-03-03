var app = angular.module("angularForm")
app.config(function($httpProvider) {
    $httpProvider.interceptors.push('Interceptor');
});
/*function config() {

}
myapp.config(function($httpProvider) {
    $httpProvider.interceptors.push('httpRequestInterceptor');
});
*/
