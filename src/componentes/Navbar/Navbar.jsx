
import CartWidget from '../CartWidget/CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"







function NavBar() {

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">THE TRUE HELL CAPS</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto navBar">
            <Nav.Link href="/">VER TODO</Nav.Link>
            <Nav.Link href="/category/Gorras">Gorras</Nav.Link>
            <Nav.Link href="/category/Bandoleras">Bandoleras</Nav.Link>
            <Nav.Link href="/category/Riñoneras">Riñoneras</Nav.Link>
          </Nav>
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>



    
  );

  
}




export default NavBar;



