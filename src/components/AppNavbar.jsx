import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { Nav, Navbar, Container } from "react-bootstrap";

function AppNavbar() {
  const cart = useSelector((state) => state.cart);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpanded(false);
  }, [location]);

  return (
    <Navbar
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      expand="lg"
      className="bg-body-tertiary fixed-top"
    >
      <Container>
        <Link
          to="/"
          className="navbar-brand"
          onClick={() => setExpanded(false)}
        >
          Home
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              className="nav-link"
              to="/products"
              onClick={() => setExpanded(false)}
            >
              Products
            </Link>
            <Link
              className="nav-link"
              to="/cart"
              onClick={() => setExpanded(false)}
            >
              Cart- {cart.length}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
