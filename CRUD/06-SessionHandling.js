/**
 * Created by arnav on 12/24/2015.
 */

var express = require('express');
var session = require('express-session');


var app = express();

var sessionOptions = {
  secret: "thisisthesecretkeyimade",
  resave : true,
  saveUninitialized : false
};
app.use(express.static("public"));
app.use(session(sessionOptions));

app.get("/login", function(req, res){
console.log("Req ",req);  
var userid = req.query.userid;
var password = req.query.pass;
if(userid==password){
	session.userid = userid;
	res.sendFile(__dirname+"/public/welcome.html");
}
	else{
		res.send("Invalid userid or password");
	}
console.log("userid "+userid+" and password "+password);	
  
});
app.post("/login", function(req, res){
var bodyParser = require('body-parser');	
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());	
console.log("Req ",req);  
var userid = req.body.userid;
var password = req.body.pass;
if(userid==password){
	res.sendFile(__dirname+"/public/welcome.html");
}
	else{
		res.send("Invalid userid or password");
	}
console.log("userid "+userid+" and password "+password);	
  
});
app.get('/welcome',function(req,res){
	
});

app.listen(3300, function (){
  console.log("Server started at: http://localhost:3300");
});
