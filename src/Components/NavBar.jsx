import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

function NavBar() {
    let  navigate=useNavigate()
  return (
    <div className="mt-3">
      <Navbar expand="lg" bg="primary" data-bs-theme="dark"  style={{border:"1px solid black",fontSize:"larger"}} sticky="top">
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}>Axios</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
              <Nav.Link onClick={() => navigate("/dashboard")}>
                Dashboard
              </Nav.Link>
              <Nav.Link onClick={() => navigate("/create")}>Create</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
