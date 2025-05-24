import React from 'react'
import { Nav, Navbar, NavDropdown, Container, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import logo from '../img/compost.png'
import '../styles/NavComponent.css'

function NavComponent() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <Image src={logo} className='logo-img' />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/AboutUs">Sobre Nosotros</Nav.Link>
              <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/aboutus">About Us</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/contact">Contact</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavComponent
