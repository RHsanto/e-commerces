import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
  const [products,setProducts] = useState([]);
  const [cart,setCart] =useState([]);
  const [displayProducts,setDisplayProducts] = useState([])

  useEffect(()=>{
    console.log('product api call')
fetch('./products.JSON')
.then(res => res.json())
.then(data =>{
        setProducts(data);
        setDisplayProducts(data);
      });

},[])

useEffect(()=>{
if(products.length){
const savedCart = getStoredCart();
const storedCart =[];
for (const key in savedCart){
  const addedProduct = products.find(product => product.key === key );
  if(addedProduct){
    const quantity  = savedCart[key];
    addedProduct.quantity = quantity 
    storedCart.push(addedProduct);
  }
}

setCart(storedCart)
}
},[products])

const addTocart =(product) =>{
  const newCart = [...cart, product]
  setCart(newCart);
  // save to local storage
  addToDb(product.key)
}

const handleSearch = event =>{
  const searchText = event.target.value;
  const macthProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
  setDisplayProducts(macthProducts)
  
}
  return (
    
  <>
    <div className='search-container'>
      <input type="search"
      onChange={handleSearch}
       name="" id="search" /><span>{cartIcon} { ' '}{cart?.length}</span>
     
    </div>
    
    <div className='shope-container'>
       <div className="product-container">
       {
        displayProducts.map(product => <Product
          key={product.key}
          product={product}
          addTocart={addTocart}>
         </Product> )
       }  
       </div>

       <div className="cart-container">
       <Cart cart={cart}></Cart>
       </div>
      </div>
    </>
  );
};

export default Shop;