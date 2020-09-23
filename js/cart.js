/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  // for(let i=0 ; i<cartItems.length ; i++) {
  //   console.log('hello' + cartItems[i]);
  // }
  
  cart = new Cart(cartItems);
  console.log(cart);
}


// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
var removedRows = document.querySelectorAll('#cart tbody tr');
console.log(removedRows);
for (var i=0 ; i <= removedRows.length ;i++)
{
  if (removedRows[i])
  {
    removedRows[i].remove();
  }
}
}




// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  var tbodyEl =  document.querySelector('#cart tbody')
  for (let i in cart.items){

  var rowEl =document.createElement('tr');
  tbodyEl.appendChild(rowEl);

  var deleteEl = document.createElement('td');
  rowEl.appendChild(deleteEl);
  deleteEl.textContent = 'X';
  deleteEl.classList.add('deletEl')
  deleteEl.id=i;

  var quantityEl = document.createElement('td');
  rowEl.appendChild(quantityEl);
  quantityEl.textContent = cart.items[i].quantity

  var itemEl = document.createElement('td');
  rowEl.appendChild(itemEl);
  itemEl.textContent = cart.items[i].product;

    var imEl = document.createElement('img')
    imEl.appendChild(rowEl);
    for ( var j=0 ; j<Product.allProducts.length ; j++ )
    {
      imEl.src=Product.allProducts[j].filePath;
      console.log(Product.allProducts[j]);
    }
    console.log(tbodyEl);

  }


  
  

  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  if ( event.target.classList.contains('deletEl'))
  {
    cart.removeItem(event.target.id)

    cart.saveToLocalStorage();

    // showCart();
    renderCart();

  }



  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
