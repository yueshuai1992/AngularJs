var app = angular.module("myapp",[]);
app.controller('data', function($scope) {
	$scope.message = [
		{
			number:111111,
			name:"iphone6",
			quantity:3,
			price:4000
		},
		{
			number:222222,
			name:"iphone6s",
			quantity:10,
			price:5000
		},
		{
			number:333333,
			name:"iphone6puls",
			quantity:10,
			price:5500
		},
		{
			number:444444,
			name:"iphone5s",
			quantity:10,
			price:3500
		},
	]
})