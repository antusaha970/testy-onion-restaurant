import React from 'react';
import './MenuBar.css';

const MenuBar = () => {
    return (
        <div className='menuBar'>
            <div className="all-btn d-flex justify-content-center align-items-center">
                <button className='mnu-btn'>Breakfast</button>
                <button className='mnu-btn'>Lunch</button>
                <button className='mnu-btn'>Dinner</button>
            </div>
        </div>
    );
};

export default MenuBar;