const express = require("express");
var bodyParser = require('body-parser');
var pug = require("pug");

//console.log("Express is ",typeof express);
var app = express();
//console.log("App is ",typeof app);
//console.dir(app);
// Adding Middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.get('/login',function(request,response){
	var userid = request.query.userid;
	var password = request.query.password;
	if(userid==password){
response.render(
        'welcome',
        { title: 'Welcome Page', message: 'Welcome '+userid})	//response.sendFile(__dirname+"/public/welcome.html");
	}
	else{
	response.send("Invalid Userid or Password ");
	}
});

app.post("/login",function(request,response){
	var userid = request.body.userid;
	var password = request.body.password;
	if(userid == password){
	response.render(
        'welcome',
        { title: 'Welcome Page', message: 'Welcome '+userid})	//response.sendFile(__dirname+"/public/welcome.html");
	}
	else{
	response.send("<h1 style='color:red'>Invalid Userid or Password </h1>, Userid is "+userid);
	}
	
})
app.listen(9999,function(){
	console.log("Server Start at 9999");
});
