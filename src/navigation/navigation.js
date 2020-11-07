import React, { Component } from 'react';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

export default class NavigationBar extends Component {

  test = () => {
    console.log("hello")
  }

  render() {
    return (
      <Navbar sticky="top" bg="dark" variant="dark" expand="md">
        <Navbar.Brand href="#home">Siming Yang</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>Projects</Nav.Link>
            <Nav.Link>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}