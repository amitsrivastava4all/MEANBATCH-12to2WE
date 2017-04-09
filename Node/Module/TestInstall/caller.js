var custommodule = require("nodejsapr");
var chalk = require("chalk");
console.log("Custom ",custommodule);
var result= custommodule.add(10,20);
console.log(chalk.green("result is ",result));

var x = 1000;
var y = 2000;
x= x+ 10+y;
y = y + 10;
console.log("X is "+x+" and y is "+y);
console.log(__dirname);
console.log(__filename);
