import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
export default function NavBar() 
{
    return (
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/">Recipe tracker</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/newest">Newest published recipes</Nav.Link>
                    <Nav.Link as={Link} to="/sortByCookingTime">Recipes by least cooking time</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            
        </Navbar>
    )


}