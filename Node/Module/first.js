//function add(x,y){
// return x  + y;
//}
//var add = (x,y)=> x + y;
var calcObject = {
	add:function(x,y){
		return x + y;
	},
	subtract:function(x,y){
		return x - y;
	}
}
function show(){
console.log('this is show');
}
module.exports = calcObject;
module.exports.mykey = show;
var third = require("./third");
third();
//module.exports=add;
//console.log('Hello Node ',add(10,20));