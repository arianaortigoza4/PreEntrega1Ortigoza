
import CartWidget from '../CartWidget/CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Buscador from '../Buscador/Buscador';







function NavBar() {

  return (

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">THE TRUE HELL CAPS</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">VER TODO</Nav.Link>
            <Nav.Link href="#link">Gorras</Nav.Link>
            <Nav.Link href="#link">Bandoleras</Nav.Link>
            <Nav.Link href="#link">Riñoneras</Nav.Link>
          </Nav>
          <CartWidget/>
          <Buscador/>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
  );

  
}




export default NavBar;



