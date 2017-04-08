var fs = require("fs");
console.log("Going to read the file...");
fs.readFile("first.js",done);
console.log("Not Hang....");
function done(error,content){
	if(error){
		console.log("Unable to read the file");
	}
	else{
		console.log("Content is "+content);
	}
}

for(var i = 1; i<=10; i++){
	console.log("this is i ",i);
}
