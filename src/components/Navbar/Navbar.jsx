import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import './navbar.css'
import CardWidget from "../CardWidget/CardWidget";

const Navbarr = () => {
  return (
    <Navbar className="navbar" bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Gift-experience</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="/category/relax">Relax</NavDropdown.Item>
              <NavDropdown.Item href="/category/extremo-aereo">
                Aereo extremo
              </NavDropdown.Item>

              <NavDropdown.Item href="/category/cultura">
                Cultural
              </NavDropdown.Item>

              <NavDropdown.Item href="/category/barGourmet">
                Gastronomia & bares
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Nav className="me-auto">
          <CardWidget />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navbarr;
