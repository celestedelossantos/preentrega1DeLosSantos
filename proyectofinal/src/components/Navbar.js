import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cartwidget from './cartwidget';

function Navbarprincipal() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Noah Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Rascadores</NavDropdown.Item>
              <NavDropdown.Item href="#">Michiropa</NavDropdown.Item>
              <NavDropdown.Item href="#">Michitoys</NavDropdown.Item>
              <NavDropdown.Item href="#">Michialimentos</NavDropdown.Item>
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