import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo2 from '../../images/logo2.png';
import './NavArea.css';

function NavArea() {
  return (
    <Navbar bg="" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo2} alt="Logo" className='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#home" className='fw-bold pe-4'>Login</Nav.Link>
            <Nav.Link href="#link">
                <Button className='custom-btn'>Sign up</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavArea;