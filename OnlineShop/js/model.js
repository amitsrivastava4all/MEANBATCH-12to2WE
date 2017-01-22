/*
This JS Has Only the Logic Stuff
*/

function Item(itemNo, name, price, url){
this.itemNo = itemNo;
this.name = name;
this.price = price;
this.url = url;    
}

var itemOperations={
    itemList:[],
    addItemInArray:function(itemObject){
        this.itemList.push(itemObject);
    }
};
