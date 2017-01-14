function validate(){
    console.log("I am Inside Validate");
    var userid = window.document.getElementById("userid").value;
    var pwd = document.getElementById("pwd").value;
    if(userid.trim().length==0){
        document.getElementById("useriderror").innerHTML="*Userid Can't Be Blank";
    }
}