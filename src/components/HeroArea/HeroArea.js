import React from 'react';
import './HeroArea.css';

const HeroArea = () => {
    return (
        <header>
            <div className="hero-container d-flex justify-content-center align-items-center">
               <div className="titles text-center">
                 <h1 className='fw-bold'>Best foods waiting for your belly</h1>
                 <form className=' mt-2'>
                    <input type="text" placeholder='Search for food' className='food-inp'/>
                    <input type="submit" className='custom-btn search-btn' />
                 </form>
               </div>
            </div>
        </header>
    );
};

export default HeroArea;