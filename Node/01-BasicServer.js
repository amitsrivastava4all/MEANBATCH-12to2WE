
var http = require("http");
//serveRequest will call on each request
http.createServer(serveRequest).listen(1234,function(){
	console.log("Server Start...");
})

   // .listen( process.env.PORT || 1234,function(){
    //console.log("Server Start...");
//});

function serveRequest(request,response){
    console.log("New Request is Coming... "+request.url);
	response.writeHead(200,"{'content-type':'application/json'}");
	//response.writeHead(200,"{'content-type':'text/html'}");
	//response.write("<html><body><h1>Hello User</h1>");
	var userObject = [{id:1001,name:'Ram',salary:49999},{id:1002,name:'Shyam',salary:39999},{id:1003,name:'Mike',salary:29999}];
    response.end(JSON.stringify(userObject));
	//response.end("</body></html>");
}
   // 
   // 
    //
//    
//    var userObject = [{id:1001,name:'Ram',salary:49999},{id:1002,name:'Shyam',salary:39999},{id:1003,name:'Mike',salary:29999}];
//    response.end(JSON.stringify(userObject));
//    //response.write(JSON.stringify(userObject));
    //response.write("<b>Hello </b>");
    //response.end("<br><h1>Hello User</h1>");
//}

