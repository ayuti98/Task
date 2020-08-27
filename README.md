Shopping cart(expressServices)
I was given a mini project on shopping cart implementation using Node.js in which whenever a new item is added it should pushed onto the stack and if the  item with same are added then the count of that same item should be incremented as well as you should be able to delete the items you have added into the cart.

For the implementation I have used the visual studio as text editor and chrome as web browser and keeping in mind user accessibility, I have designed a simple cart where you can add items by clicking on the item name or on + , as well as you can delete items using delete or can use - to pop out one item(==0,will delete) as well as you can clear the cart. You can also see the total number of  items in the cart as well as the total cart amount.

The UI is implemented using simple HTML.Various functions are written in Js script whose link is then given onto the script section of the html.

The expressServices.js contains various functions such as:

1. Firstly an array var cart[] is set who is going to hold cart Items and then a function is set up who generate objects that will store in cart array.
2. Function addItemTocart(name, price, count) is going to add an item to the cart and will receive three parameter name, price, count and as well as we are checking if the same item enters then the count of that item will be increased and if we don't find same item then we are pushing new item to cart.
3. Function removeItemFromCart(name)is going to pop out one item from the cart by looking up the name passed and decrement it by 1, you can do as much as you want like based on items added and can be done using the button – to decrement.
4. Function removeItemFromCartAll(name), completely removes the item from the cart without subtracting one each time. Here we don’t need to subtract one but just splice it out from array.
5. Function ClearCart(), is going to remove everything from the cart by setting the cart=[];
6. Function CountCart(), is going to return value, is going to give us total number of items in the cart.(Basically going to tell how many items in the cart for eg. If 2 guava and 3 mangoes then tot=5).
7. Function totalCart(), is going to give total cost of cart.
8. Function listCart(), is going to return an array, what is in shopping cart. So the area of the code that requested the array by calling a listCart() it will deal with the array and displays the array however it want to display array.
9. Function saveCart() and loadCart(), is going to save cart information to store to local storage and load cart is going to load information from local storage. Json or java script object notation it is essentially, a way of writing javascript objects and array as a string. A cart is being saved whenever changes occurs in cart. 
10. Function setCountForItem(name, count) will loop through the entire cart, will look into the names of each item in the cart and will match to the names which is been passed and will set the count of item in the count  to count and will save the cart.



The expressServices.html file is written to create html interface to let us display items in the cart, add items to the cart and to see how actually the javascript works in browser window.

1. Inside body tags list of items are created using link tags as well as  button for clear cart. So basically in the interface you are going to click on this link and javascript is going to retrieve the name and price and is going to add that particular item in the cart.
2. In order to display cart on the page and add the items from the page using interface in html jquery is used and jquery with CDN(content delivery network) is used the main ideology behind this is that the jquery are hosted on someone else’s server which we can download from their server.
3.$(“ .add-to-cart”).click(function(event)){}); ,is jquery is going to select all the items from the class add-to-cart and going to add click function so whenever you will click any of the item it will execute the function(event).
4. In order to display the items function displayCart() is written it will going to get data from listCart() and perform the function and every time to display the fresh output we have to add displaycart() in each function , as well as it is going to display the count and total cart amount, also it displays +, -, delete buttons( javaquery will execute it).
 5. .$(“ #clear-cart”).click(function(event)){});, this on clicking will execute clearCart() function and clears the cart and as well as updated cart is displayed.
 6. .$(“ #show-cart”).on(“click”, “delete-item” function(event)){});, in this when click event occurs on show-cart and is going to execute removeItemFromCartAll(name) of that particular name.
 7. .$(“ #show-cart”).on(“click”, “subtract-item” function(event)){});, This query on execution will remove one item from the cart by pressing – button and displays.
8. .$(“ #show-cart”).on(“click”, “plust-item” function(event)){});, This query on execution will add one item from the cart by pressing + button and displays cart.
9. .$(“ #show-cart”).on(“click”, “item-count” function(event)){});,in this we are adding event to input field so that when value in input field changes the query will execute showCountForItem() function  and displays.

To run the expressService project
Run server.bat
Then open browser and type localhost:8080
Then add items to the cart.
