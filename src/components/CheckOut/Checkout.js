import React from 'react';
import { Container } from 'react-bootstrap';
import img from '../../images/oredr_Completed.png';


const Checkout = () => {
    return (
        <Container>
            <img src={img} alt="" className='img-fluid' />
        </Container>
    );
};

export default Checkout;