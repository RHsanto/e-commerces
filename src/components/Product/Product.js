import React from 'react';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {

const {img,name,price,stock,star}= props.product

const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
 
  return (
    <div className='product'>
      <div className="product-img">
      <img src={img} alt="" />
      </div>
      <h4>{name}</h4>
      <h3>Price : ${price}</h3>
      <p>only {stock} left in stock - order soon</p>
      <Rating className='rating'
      emptySymbol="far fa-star "
      fullSymbol="fas fa-star "
      readonly
      initialRating={star}
      > </Rating>
      <br /> <br />
      <button onClick={()=>props.addTocart(props.product)}> {cartIcon} add to cart</button>
     

    </div>
  );
};

export default Product;