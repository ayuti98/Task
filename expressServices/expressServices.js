//********shoppingcart***********
 var cart=[]; //array is use to implement stack
//name price and count
 Item = function(name,price,count)  {
    this.name=name
    this.price=price
    this.count=count

};
function addItemToCart(name,price,count){
    for(var i in this.cart){
        if(cart[i].name===name){
           cart[i].count +=count;
            saveCart();
            return;
        }
    }
    
    var item = new this.Item(name,price,count);
        cart.push(item);
        saveCart();
}


function setCountForItem (name, count) {
    
    for(var i in cart){
        if(cart[i].name === name){
           cart[i].count = count;
            break;
        }
    }
    saveCart();
}


function removeItemFromCart(name){
    for(var i in cart){
        if(cart[i].name===name){
           cart[i].count --; //will pop, cart[i].count -=1
            if(cart[i].count===0){
                cart.splice(i,1);
            }

            break;

        }

    }
     saveCart();

}//Remove one item


function removeItemFromCartAll(name){
    for(var i in cart){
        if(cart[i].name===name){
           cart.splice(i, 1);
            break;
        }
          saveCart();
    }


}//remove all item name



function clearCart(){
     cart= [];
     
     
     saveCart();

}
// clearCart();

function countCart()   {
    var totalcount = 0;
    for(var i in cart){
        totalcount += cart[i].count

    }
    return totalcount;
}//---returns total count


function totalCart(){
    var totalCost = 0;
    for(var i in  cart){
        totalCost +=  cart[i].price *  cart[i].count;
        }
        return totalCost.toFixed(2);
}// ---return total cost


function listCart(){
    var cartCopy = [];
    for(var i in  cart){
        var item =  cart[i];
        var itemCopy = {};
        for(var p in item){
            itemCopy[p] = item[p];

        }
        itemCopy.total = (item.price * item.count).toFixed(2);
        cartCopy.push(itemCopy);
    }
    return cartCopy;

}// ---array of item


function saveCart(){
    localStorage.setItem("expressCart", JSON.stringify(this.cart));

}
//localStorage.setItem("age", 33);

function loadCart(){
       cart = JSON.parse( localStorage.getItem("expressCart"));
}
loadCart();


