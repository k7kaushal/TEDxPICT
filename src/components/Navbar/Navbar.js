import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import Logo from "../../assets/Logo_White.png";
import { NavLink } from "react-router-dom"; 
import "./Navbar.css";

// const customClass = "myCustomNavLink";
// bsPrefix={customClass}

function NavbarTED() {
  return (
    <div>
      <Navbar expand="lg" bg="myColor" variant="light" className="navbar">
        <Navbar.Brand>
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "150px", marginLeft: "15px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link></Nav.Link>
          </Nav>
          <Nav className="nav">
            <NavLink activeClassName="menu_active" to="/" exact className="myCustomNavLink">
              Home
            </NavLink>
            <NavLink activeClassName="menu_active" to="/about-us" className="myCustomNavLink" >
              About Us
            </NavLink>
            <NavLink  activeClassName="menu_active" to="/partners" className="myCustomNavLink">
              Partners
            </NavLink>
            <NavLink activeClassName="menu_active" to="/past-editions" className="myCustomNavLink">
              Past Editions
            </NavLink>
            <NavLink activeClassName="menu_active" to="/forums" className="myCustomNavLink">
              Blogs
            </NavLink>
            <NavLink activeClassName="menu_active" to="/contact-us" className="myCustomNavLink">
              Contact Us
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarTED;

