import React, { useRef } from "react";
import './TopNav.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoshesha from './images/logoshesha.png';

export const  TopNav = () => {
 const navRef = useRef();

//  const showNavbar = () => {
  // navRef.current.classList.toggle("responsive_nav");
//  }

  return (

    /* Navbar Section */
    <Navbar collapseOnSelect expand="lg" className="bg-body-green" style={{position:"relative",width:"125%",backgroundColor:"green",}}>
    <Container>
      <Navbar.Brand href="/home"><h1 style={{fontSize:"50px",}}>Shesha</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/Home" style={{color:"white",fontSize:"1.2rem",fontWeight:"600",position:"relative",left:"20%",}}>Home</Nav.Link>
          <Nav.Link href="/Lessons"style={{color:"white",fontSize:"1.2rem",fontWeight:"600",position:"relative",left:"20%",}}>Lessons</Nav.Link>
          <Nav.Link href="/Recipes"style={{color:"white",fontSize:"1.2rem",fontWeight:"600",position:"relative",left:"20%",}}>Recipes</Nav.Link>
          <Nav.Link href="/"style={{color:"white",fontSize:"1.2rem",fontWeight:"600",position:"relative",left:"20%",}}>Articles</Nav.Link>
          <NavDropdown title="About"  id="collasible-nav-dropdown"style={{fontSize:"1.2rem",fontWeight:"600",color:"white",position:"relative",left:"20%",}}>
            <NavDropdown.Item href="/About">About Shehsha</NavDropdown.Item>
            <NavDropdown.Item href="/FoodService">
              About Food Service
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link eventKey={2} href="#memes" style={{color:"whitesmoke",fontSize:"1.2rem",fontWeight:"600",}}>
            Contact Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
