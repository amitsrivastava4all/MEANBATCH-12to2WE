var custommodule = require("nodejsapr");
var chalk = require("chalk");
console.log("Custom ",custommodule);
var result= custommodule.add(10,20);
console.log(chalk.green("result is ",result));