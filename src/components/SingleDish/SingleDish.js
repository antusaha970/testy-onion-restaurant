import React from 'react';
import { Link } from 'react-router-dom';
import './SingleDish.css';

const SingleDish = (props) => {
    const { name, description, price, img, id } = props.item;
    return (

        <div className='col-md-4'>
            <Link to={`/dish/${id}`} className='dish-link'>
                <div className="dish-container text-center">
                    <img src={img} alt="food" className='food-img' />
                    <h5 className='dish-name'>{name}</h5>
                    <p className='text-muted'>{description}</p>
                    <p className='dish-price'>${price}</p>
                </div>
            </Link>
        </div>
    );
};

export default SingleDish;