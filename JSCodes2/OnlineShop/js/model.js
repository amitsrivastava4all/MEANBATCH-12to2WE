/*
This JS Has Only the Logic Stuff
*/
//Function Constructor
function Item(itemNo, name, price, url){
this.itemNo = itemNo;
this.name = name;
this.price = price;
this.url = url;    
}
// object {key:value,key:value}
// this is an Object
var itemOperations={
    itemList:[],  // this member of object
    addItemInArray:function(itemObject){
        this.itemList.push(itemObject);
    },
    searchItem:function(searchObject){
       // var subArray =
        return this.itemList.filter(function(itemObject){
            var nameSearch = true;
            if(searchObject.name){
                nameSearch= itemObject.name==searchObject.name;
            }
            
            searchObject.price = parseInt(searchObject.price);
            searchObject.price = isNaN(searchObject.price)?0:searchObject.price;
            return itemObject.price>=searchObject.price && nameSearch;
        });
        //return subArray;
    }
};
