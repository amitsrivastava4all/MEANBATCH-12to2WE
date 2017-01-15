'use strict'
function validate(){
    isBlank("uid","*Userid Can't Be Blank","useriderror");
    isBlank("pwd","*Password Can't Be Blank","pwderror");
//    console.log("I am Inside Validate");
//    //var userid = window.document.getElementById("userid").value;
//    
//    //var pwd = document.getElementById("pwd").value;
//    if(userid.trim().length==0){
//        document.getElementById("useriderror").innerHTML="*Userid Can't Be Blank";
//    }
//    if(pwd.trim().length==0){
//    document.getElementById("pwderror").innerHTML="*Password Can't Be Blank";
//    }

    
}
function isBlank(fieldid,msg,errorfield ){
    var field = document.getElementById(fieldid).value;
    if(field.trim().length==0){
        document.getElementById(errorfield).innerHTML=msg;
    }
    else{
        document.getElementById(errorfield).innerHTML="";
    }
}

function clearFields(){
var fieldArray=document.getElementsByClassName("clear"); 
Array.prototype.forEach.call(fieldArray,function(field){
field.value="";
    //console.log(e);
});    
//document.getElementById("userid").value="";
//    document.getElementById("pwd").value="";
}