// this is a model , and it contain a logic
//var calcObject = {
//add:function (x,y){
//return parseInt(x) + parseInt(y);
//},
//
//subtract:function (x,y){
//return x - y;
//},
//
//multiply:function (x,y){
//return x * y;
//},
//
//divide:function (x,y){
//return x /y ;
//}
//}
function calculate(x,y,operator){
	return eval(x+operator+y);
};window.addEventListener("load",function(){
	var tt1='Hello';
	var arraylikeBt = document.getElementsByClassName("operation");
	Array.prototype.forEach.apply(arraylikeBt,[function(currentBt){
		currentBt.addEventListener("click",doOperation);
	}]);
	//	document.getElementById("addBt").addEventListener("click",addData);
//	document.getElementById("subBt").addEventListener("click",subData);
});


function validate(num,errorFieldId,errorMessage){
	if(num.trim().length>0){
		return true;
	}
	else{
		document.getElementById(errorFieldId).innerHTML=errorMessage;
		return false;
	}
}

function doOperation(){
	var output;
	var firstNo = document.getElementById("firstNo").value;
	
	var secondNo = document.getElementById("secondNo").value;
	console.log("Button is ", this.innerHTML);
	var firstresult = validate(firstNo,"firsterror","FirstNo Can't Be Blank");
	var secondresult = validate(secondNo,"seconderror","SecondNo Can't be Blank");
	if( firstresult && secondresult){
	output =calculate(firstNo,secondNo,this.innerHTML);
		document.getElementById("result").innerHTML = output;

	}
	//var opr = this.getAttribute("data-operation");
	//output = calcObject[opr](firstNo,secondNo);
	//var opr = this.innerHTML;
//	if(opr =="+"){
//		output = add(firstNo,secondNo);
//	}
//	else
//	if(opr =="-"){
//		output = subtract(firstNo,secondNo);
//	}
//	else
//	if(opr =="*"){
//		output = multiply(firstNo,secondNo);
//	}
//	else
//	if(opr =="/"){
//		output = divide(firstNo,secondNo);
//	}
	//var output= add(firstNo,secondNo);
	}

//function addData(){
//	var firstNo = document.getElementById("firstNo").value;
//	var secondNo = document.getElementById("secondNo").value;
//	var output= add(firstNo,secondNo);
//	document.getElementById("result").innerHTML = output;
//}
//
//function subData(){
//	var firstNo = document.getElementById("firstNo").value;
//	var secondNo = document.getElementById("secondNo").value;
//	var output= subtract(firstNo,secondNo);
//	document.getElementById("result").innerHTML = output;
//}