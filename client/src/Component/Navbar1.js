import React, { Component } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import '../App.css'

export default class Navbar1 extends Component {
  render() {
    return (
      <div>
        <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
            <div className="container">
          <Navbar.Brand><Link to="/" className="links"><img src={require('../media/logo.PNG')} height="40px" alt="logo" /> Tamra Restaurant </Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              
            </Nav>
            <Nav>
              <Nav.Link as='li'><Link to='/login' className="links"><FontAwesomeIcon icon={faUser} /> LogIn</Link></Nav.Link>
              <Nav.Link as='li' ><Link to='/signup' className="links"><FontAwesomeIcon icon={faUserPlus} /> SignUp</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}
