import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Cartwidget from './cartwidget';

function Navbarprincipal() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Link to='/' className='navbar-brand' >Noah Store</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <Link to='/category/Rascadores' className='dropdown-item' >Rascadores</Link>
              <Link to='/category/Michiropa' className='dropdown-item' >Michiropa</Link>
              <Link to='/category/Michitoys' className='dropdown-item' >Michitoys</Link>
              <Link to='/category/Michialimentos' className='dropdown-item' >Michialimentos</Link>
            </NavDropdown>
            <Nav.Link href="#">
            </Nav.Link>
             <Cartwidget ></Cartwidget>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarprincipal;