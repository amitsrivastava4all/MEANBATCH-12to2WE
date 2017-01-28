/*
This Controller is Acting as a Middle Layer B/W
View(HTML) and Model(JS)
*/
window.addEventListener("load",init);
function init(){
document.getElementById("add").addEventListener("click",addNewTask);
document.getElementById("search").addEventListener("click",searchTask);    
}
function isNotBlank(val){
    if(val){
        return true;
    }
    else{
        return false;
    }
}
function searchTask(){
    var id = itemNo;
     
    var itemName = document.getElementById("itemname").value;
    var itemURL = document.getElementById("url").value;
    var itemObject = new Item();
    itemObject.id = isNotBlank(id)?id:0;
    itemObject.name = isNotBlank(itemName)?itemName:"";
    itemObject.price = document.getElementById("price").value;
    
    
    var subArray = itemOperations.searchItem(itemObject);
    printTask(subArray);
}

function printTask(itemList){
   var table = document.getElementById("itemlist"); table.innerHTML="";
  itemList.forEach(function(itemObject){
      var row = table.insertRow();
      row.insertCell(0).innerHTML = itemObject.itemNo;
      row.insertCell(1).innerHTML = itemObject.name;
    row.insertCell(2).innerHTML = itemObject.price;
      row.insertCell(3).innerHTML = itemObject.url;
  });    
}

var itemNo = 1;
function addNewTask(){
    var table = document.getElementById("itemlist");
    var itemName = document.getElementById("itemname").value;
    var price = document.getElementById("price").value;
    var url = document.getElementById("url").value;
    var row = table.insertRow();
    var itemObject = new Item(itemNo,itemName,price,url);
    itemOperations.addItemInArray(itemObject);
    row.insertCell(0).innerHTML=itemNo;
    row.insertCell(1).innerHTML=itemName;
    row.insertCell(2).innerHTML = price;
    row.insertCell(3).innerHTML = url;
    itemNo++;
    clearField();
}

function clearField(){
document.getElementById("itemno").innerHTML = itemNo;
var fields = document.getElementsByClassName("clearfields"); 
Array.prototype.forEach.call(fields,function(field){
    field.value="";
});
document.getElementById("itemname").focus();    
}