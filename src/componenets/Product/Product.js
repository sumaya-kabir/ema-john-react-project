import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = ({handleAddToCart, product}) => {
    // const {handleAddToCart, product} = props.product;
    const {name, img, seller, price, ratings} = product;
    return (
        <div className='product'>
            <img src={img} alt=''/>
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p><b>Price: {price}$</b></p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} stars</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className="btn-cart">
                <p>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;