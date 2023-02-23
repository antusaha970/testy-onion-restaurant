import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { DishContext } from '../../App';
import ShowAllDish from '../ShowAllDish/ShowAllDish';
import SingleDish from '../SingleDish/SingleDish';
import './MenuBar.css';

const MenuBar = () => {
    const [allItems,setAllItems,currentDish, setCurrentDish] = useContext(DishContext);
    
    useEffect(() => {
        const dishes = allItems.filter(dish => dish.category === 'lunch');
        setCurrentDish(dishes);
    }, [])
    console.log(currentDish);

    const handleClick = (e) =>{
        if(e.target.innerText === 'Breakfast'){
            const newDishes = allItems.filter(dish => dish.category === 'breakfast');
            setCurrentDish(newDishes);
        }
        if(e.target.innerText === 'Lunch'){
            const newDishes = allItems.filter(dish => dish.category === 'lunch');
            setCurrentDish(newDishes);
        }
        if(e.target.innerText === 'Dinner'){
            const newDishes = allItems.filter(dish => dish.category === 'dinner');
            setCurrentDish(newDishes);
        }
    }
    return (
        <Container>
            <div className='menuBar'>
                <div className="all-btn mb-5 d-flex justify-content-center align-items-center">
                    <Link to='/'><button className='mnu-btn' onClick={handleClick}>Breakfast</button></Link>
                    <Link to='/'><button className='mnu-btn' onClick={handleClick}>Lunch</button></Link>
                    <Link to='/'><button className='mnu-btn' onClick={handleClick}>Dinner</button></Link>
                </div>
            </div>
        </Container>
    );
};

export default MenuBar;