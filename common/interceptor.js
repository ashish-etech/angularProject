var app = angular.module("angularForm");

app.factory('Interceptor', function ($localStorage) {
	return {
		request: function (config) {
			console.log(config)
			var token = $localStorage.token;
			if (config.url!='angularUtils.directives.dirPagination.template'){
				config.url=config.url + '?accessToken=' + token;
			}
			console.log(config)
			return config;				
		}
	};
});

