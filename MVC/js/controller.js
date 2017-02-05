// It is a Glue View and Model
// $scope - Act as a Glue B/w View and Controller
app.controller("sictrl",function($scope,sifactory){
    console.log("Controller Start.....",$scope );
    $scope.calc=function(){
        console.log("Calc Call "+$scope.pr+" "+$scope.rate+" "+$scope.time);
        $scope.result = sifactory.calculateSI($scope.pr,$scope.rate,$scope.time);
    }
})