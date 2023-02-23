import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { DishContext } from '../../App';

const CheckOutBtn = () => {
    const [allItems, setAllItems, currentDish, setCurrentDish, cart, setCart] = useContext(DishContext);
    return (
        <div className='d-flex justify-content-center'>
            {cart.length >= 1 ? <Button className='custom-btn'>Checkout Your Food </Button> : <Button variant="secondary" disabled='True' className='custom-btn'>Checkout Your Food </Button>
            }
        </div>
    );
};

export default CheckOutBtn;