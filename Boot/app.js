var app = angular.module("myapp",["app2"]);
app.controller("ctrl",function($scope,$rootScope,myfactory){
	$scope.firstName = "Amit";
	$rootScope.city="Delhi";
	myfactory.setAge(21);
});
app.controller("ctrl2",function($scope,myfactory){
	$scope.lastName = "Srivastava "+$scope.city;
	$scope.age = "Age is "+myfactory.getAge();
	
})
var app2 = angular.module("app2",[]);
app2.factory("myfactory",function(){
	var object = {age : 0,
	setAge:function(age){
		this.age = age;
	},
	getAge:function(){
		return this.age;
	}
	}
	return object;
});