import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { DishContext } from '../../App';

const CheckOutBtn = () => {
    const [allItems, setAllItems, currentDish, setCurrentDish, cart, setCart] = useContext(DishContext);
    const navigation = useNavigate();
    const handleCheckOut = ()=>{
        navigation('/login');
    }
    return (
        <div className='d-flex justify-content-center'>
            {
                cart.length >= 1 ? <Button className='custom-btn' onClick={handleCheckOut}>Checkout Your Food </Button> : <Button variant="secondary" disabled='True' className='custom-btn'>Checkout Your Food </Button>
            }
        </div>
    );
};

export default CheckOutBtn;