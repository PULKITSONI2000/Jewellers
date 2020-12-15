import React from 'react'
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const NavBarHeader = () => {
    return (
        <Navbar sticky="top" variant="dark" bg="dark" className="bg-transparent" expand="lg">
        {/* <Link to="/" className="navbar-brand">NK Jewellers</Link> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            
            <NavDropdown title="Rings" className="bg" id="ring-dropdown" >
              <NavDropdown.Item href="#action/3.1">Ring 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Ring 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Ring 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Ring 4</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Earrings"   className="bg" id="earrings-dropdown" >
              <NavDropdown.Item href="#action/3.1">Earrings 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Earrings 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Earrings 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Earrings 4</NavDropdown.Item>
            </NavDropdown>
           
            <NavDropdown title="Pendants"   className="bg" id="pendants-dropdown" >
              <NavDropdown.Item href="#action/3.1">Pendants 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Pendants 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Pendants 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Pendants 4</NavDropdown.Item>
            </NavDropdown>
            
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavBarHeader
