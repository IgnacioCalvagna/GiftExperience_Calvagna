import React from "react";
import "../assets/css/navbar.css";
import CardWidget from "./CardWidget";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import logito from "../logo.svg";

const Navbarr = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logito}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Nav>
          <Nav.Link> Coder Gift</Nav.Link>
          </Nav>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            
              <Nav.Link ><NavLink to='/'> Home</NavLink></Nav.Link>
               <Nav.Link><NavLink to='/aboutUs'> About us</NavLink></Nav.Link>
              <Nav.Link href="#">Products</Nav.Link>
            </Nav>
            <Nav>
                {/* Punto 1 de la actividad de componentes I */}

              <Nav.Link href="#">
                <CardWidget />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>{" "}
    </>
  );
};

export default Navbarr;
