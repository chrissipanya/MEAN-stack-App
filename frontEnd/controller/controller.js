var myApp = angular.module('myApp', []);

function testFun ($scope, $http) {
    console.log("Hello World from controller");
	
	$http.get('/list').then(function(response){
		console.log("I got the data");
		$scope.list = response.data;
		
	});
	
}

myApp.controller('AppCtrl', ['$scope', '$http', testFun]);

