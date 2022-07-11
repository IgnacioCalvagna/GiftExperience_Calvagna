import React /* , { useContext } */ from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./navbar.css";
import CardWidget from "../CardWidget/CardWidget";
import { Link } from "react-router-dom";
// import { myContext } from "../../contexts/themeContext";

const Navbarr = () => {
  // const { darkMode, setDarkMode } = useContext(myContext);

  // const handleChangeTheme = () => {
  //   darkMode ? setDarkMode(false) : setDarkMode(true);
  // };

  return (
    <>
      <Navbar className='navbar'collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand><Link to="/">Gift-experience</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>

              <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/category/relax">Relax</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/category/extremo-aereo">Aereo extremo</Link>
                </NavDropdown.Item>

                <NavDropdown.Item >
                  <Link to="/category/cultura"> Cultural</Link>
                </NavDropdown.Item>

                <NavDropdown.Item >
                  <Link to="/category/barGourmet"> Gastronomia & bares</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets"></Nav.Link>
              <Nav.Link eventKey={2} /* href="#memes" */>
                <CardWidget />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Navbarr;
