var app = angular.module('mainApp',['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'logIn.html'
	})
	.when('/welcome',{
		resolve: {
			"check": function($location, $rootScope) {
				if(!$rootScope.loggedIn) {
					$location.path('/');
				}
			}
		},	
	   templateUrl: 'welcome.html'
	})	
});

app.controller('loginController', function($scope, $location, $rootScope) {
	$scope.submit = function (){
		var uname = $scope.username;
		var pwd = $scope.password;
		if($scope.username == 'admin' && $scope.password == 'admin'){
			$rootScope.loggedIn = 'true';
			$location.path('/welcome');
		}else{
			alert("Invalid Credential")
			$location.path('/');
		}
	};
});