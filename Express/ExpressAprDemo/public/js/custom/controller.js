app.controller("crudctrl",function($scope,crudfactory){
	$scope.user={};
	$scope.addUser=function(){
		var promise = crudfactory.callServer($scope.user,url.register);
		promise.then(function(data){
			$scope.result= data.data;
		},function(err){
			$scope.result = err;
		})
		
	}
	$scope.searchUser=function(){
		var promise = crudfactory.callServer($scope.user,url.login);
		promise.then(function(data){
			$scope.result= data.data;
		},function(err){
			$scope.result = err;
		})
	}
})