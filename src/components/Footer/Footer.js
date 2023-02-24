import React from 'react';
import { Container } from 'react-bootstrap';
import logo from '../../images/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <Container className='d-flex justify-content-between'>
                <img src={logo} alt="footer logo" className='foot-logo' />
                <p>All rights are reserved by Red Onion</p>
            </Container>
        </footer>
    );
};

export default Footer;