/*
This JS Has Only the Logic Stuff
*/
//Function Constructor
function Item(itemNo, name, price, url){
this.itemNo = itemNo;
this.name = name;
this.price = price;
this.url = url; 
this.isDeleted = false;    
}
// object {key:value,key:value}
// this is an Object
var itemOperations={
    //itemNo:1,
    itemList:[],  // this member of object
    sortByPrice:function(){
        return this.itemList.sort(function(first,second){
            return first.price - second.price;
        })
    }
    ,
    deleteRecords:function(){
       return this.itemList =  this.itemList.filter(function(itemObject){
            return itemObject.isDeleted ==false;
        });
    }
    ,
    searchById:function(itemNo){
        var subArray =this.itemList.filter(function(itemObject){
            return itemObject.itemNo ==itemNo;
        });
        var itemObject  = subArray[0];
        itemObject.isDeleted = !itemObject.isDeleted;
        return itemObject;
    }
    ,
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
