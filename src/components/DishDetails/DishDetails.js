import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { DishContext } from '../../App';
import CheckOutBtn from '../CheckOutBtn/CheckOutBtn';
import './DishDetails.css';

const DishDetails = () => {
    const { id } = useParams();
    const [allItems, setAllItems, currentDish, setCurrentDish,cart, setCart] = useContext(DishContext);

    const handleCounterClick = (e) => {
        navigator.vibrate(100);
        const counterInp = document.getElementById('counterInp');
        if (e.target.innerText === '+') {
            let prv = counterInp.value;
            counterInp.value = Number(prv) + 1;
        }
        if (e.target.innerText === '-') {
            let prv = counterInp.value;
            if (Number(prv) > 0) {
                counterInp.value = Number(prv) - 1;
            }
        }
    }
    const dish = allItems.find(dish => dish.id === parseInt(id));

    const handleAddToCart = () =>{
        if(Number(document.getElementById('counterInp').value) !== 0){
            const quantity  = Number(document.getElementById('counterInp').value);
            const newItem = {...dish, quantity: quantity};
            setCart([...cart,newItem]);
        }
        else{
            alert("Please add something to cart");
        }
    }

    return (
        <Container>
            <div className='row details-size justify-content-center'>
                <div className="col-md-6">
                    <h2 className='dish-title'>{dish.name}</h2>
                    <p className='dish-description text-muted'>
                        Eating a healthy diet that includes lots of fruit, vegetables, whole grains and a moderate amount of unsaturated fats, meat and dairy can help you maintain a steady weight. Having a good variety of these foods every day leaves less room for foods that are high in fat and sugar - a leading cause of weight gain.
                    </p>
                    <p className='dish-price-2'>${dish.price}</p>
                    <div className='d-flex counter align-items-center'>
                        <p onClick={handleCounterClick} className="counterSign">+</p>
                        <input type="number" id="counterInp" placeholder='Quantity' className='inpCounter'/>
                        <p onClick={handleCounterClick} className="counterSign">-</p>
                    </div>
                    <button className='custom-btn' onClick={handleAddToCart}>Add To Cart</button>
                </div>
                <div className="col-md-6">
                    <img src={dish.img} alt="Dish" className='img-fluid' />
                </div>
            </div>
            <CheckOutBtn></CheckOutBtn>
        </Container>
    );
};

export default DishDetails;