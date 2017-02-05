// this contains only logic
app.factory("sifactory",myfactory);
            
function myfactory(){
    console.log("Factory Start....");
    var factoryOperations = {};
    factoryOperations.calculateSI=function(pr,rate,time){
        return (parseInt(pr) * parseInt(rate) * parseInt(time))/100;
    }
    return factoryOperations;
}            