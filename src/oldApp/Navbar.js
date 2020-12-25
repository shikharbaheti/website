import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './NavBar.css';

function NavBar() {
    return (
        <div className="NavBar">
            <Navbar fixed="top" collapseOnSelect expand="lg" className="color-nav" variant="dark">
                <Navbar.Brand href="/">Shikhar Baheti</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link className="navbarLink" href="#about">About</Nav.Link>
                        <Nav.Link className="navbarLink" href="#projects">Projects</Nav.Link>
                        <Nav.Link className="navbarLink" href="#involvement">Involvement</Nav.Link>
                        {/* <Nav.Link className="navbarLink" href="#classes">Classes</Nav.Link> */}
                        <Nav.Link className="navbarLink" href="#resume">Resume</Nav.Link>
                    </Nav>
                    {/* <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">Dank memes</Nav.Link>
                    </Nav> */}
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;
