const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.post('/addUser',function(request,response){
	response.send("Hello this is Add User "+request.body.userid+" "+request.body.pwd);
});

app.post('/getUser',function(request,response){
	response.send("Welcome User");
});

app.listen(2222,function(){
console.log("Server Start...");
})