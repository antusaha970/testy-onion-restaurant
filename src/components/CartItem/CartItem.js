import React from 'react';
import './CartItem.css';

const CartItem = ({item}) => {
    const { name, img, price,quantity} = item;

    return (
        <div className='cart-item-container'>
           <div className="row">
            <div className="box d-flex justify-content-center">
                <img src={img} alt="cart food" className='cart-img'/>

            </div>
            <div className="box">
                <p className='cart-item-name'>{name}</p>
                <p className='cart-item-price'>${price}</p>
                <small>Quantity : {quantity}X</small>
            </div>
            </div> 
        </div>
    );
};

export default CartItem;