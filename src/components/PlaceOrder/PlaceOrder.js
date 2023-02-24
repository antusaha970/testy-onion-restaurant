import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { DishContext } from '../../App';
import CartItem from '../CartItem/CartItem';
import './PlaceOrder.css';

const numberBeautify = (number) => {
    return number.toFixed(2);
}

const PlaceOrder = () => {
    const [allItems, setAllItems, currentDish, setCurrentDish, cart, setCart] = useContext(DishContext);
    const handlePlaceOrder = (e) => {
        e.preventDefault();
    }

    const subTotal = cart.reduce((sum, item) => ( sum + (Number(item.price)*item.quantity)), 0);
    const tax = subTotal * 0.10;
    const fee = 5;
    const total = subTotal + tax + fee;





    return (
        <Container>
            <div className="row my-5">
                <div className="col-md-6 ">
                    <h3>Edit Delivery Details</h3>
                    <form onClick={handlePlaceOrder}>
                        <input className="input-field" type="text" name="address" id="UserName" placeholder="Address (*Required)" required />
                        <input className="input-field" type="text" name="address" id="UserName" placeholder="Full Address(Optional)" />
                        <input className="input-field" type="text" name="address" id="UserName" placeholder="Flat,suit or Floor(Optional)" />
                        <input className="input-field" type="text" name="address" id="UserName" placeholder="Add Delivery Instruction(Optional)" />
                        <input className="input-field" type="text" name="phone" id="UserName" placeholder="Add phone (Optional)" />
                        <input className="submit-btn custom-btn" type="Submit" value={'Place Order'} readOnly />
                    </form>
                </div>
                <div className="col-md-6">
                    <div className="cart-container">
                        <div className="top-text">
                            <p>Form <b>Engineer Hotel & Co</b></p>
                            <p>Arriving in 20 to 40 min</p>
                            <p>Road no 69</p>
                            {
                                cart?.map((item) => <CartItem item={item} key={item.name}></CartItem>)
                            }
                            <div className="pricing">
                                <table className='table'>
                                    <tr>
                                        <td>Subtotal : {cart.length} items</td>
                                        <td>${numberBeautify(subTotal)}</td>
                                    </tr>
                                    <tr>
                                        <td>Tax</td>
                                        <td>${numberBeautify(tax)}</td>
                                    </tr>
                                    <tr>
                                        <td>Delivery Fee</td>
                                        <td>${numberBeautify(fee)}</td>
                                    </tr>
                                    <tr>
                                        <td>Total</td>
                                        <td>${numberBeautify(total)}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default PlaceOrder;