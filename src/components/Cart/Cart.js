import React from 'react';
import './Cart.css'
const Cart = (props) => {
  const {cart} = props

 let price = 0;
 let shipping =0;
 let totalBeforeTax = 0;
 let tax = 0 ;
 let total = 0
 for(const product of cart ){
   price = price + product.price;
   shipping = shipping + product.shipping;
   totalBeforeTax =  price + shipping;
   tax =  totalBeforeTax / 10  ;
   total = price + shipping  + tax
 }
  return (
    <div className='cart'>
       <div className="cart-info">
       <h2>Order Summsry</h2>
       <h3>Items ordered:{props.cart.length}</h3>
       </div>
       <div className="pirce-list">
        <p>Price : <span className='span1'> ${price.toFixed(2)}</span></p>
        <p>Shipping & Handling : <span className='span2'> ${shipping.toFixed(2)}</span></p>
        <p>Total before tax: <span className='span3'> ${totalBeforeTax.toFixed(2)}</span></p>
        <p>Estimated Tax: <span className='span4'> ${tax.toFixed(2)}</span></p>
        <h3> Order Total: <span className='span5'>${total.toFixed(2)}</span></h3>
       </div>
    </div>
  );
};

export default Cart;