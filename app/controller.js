var app = angular.module('myApp', []);
app.controller("myco", function($scope) {
	$scope.name = "xiaomian";
	$scope.age = 20;

	$scope.date = new Date();
	$scope.count = 0;
	setInterval(function() {
		$scope.$apply(function() {
			$scope.date = new Date();
		})
	},1000)

	$scope.$watch("name",function(newVal,oldVal){
		++$scope.count;
		if($scope.count==10){
			$scope.name = "已经超过10次！"
		}
	})
	console.log($scope)
})