import React, { Component } from "react";
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faAddressBook, faHamburger, faUsers, faTags, faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import '../App.css'

export default class Navbar1 extends Component {
  render() {
    
    return (
      <div>
        <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
            <div className="container">
          <Navbar.Brand><Link to="/" className="links"><img src={require('../media/logo.PNG')} height="40px" alt="logo"/> Tamra Restaurant </Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              
            </Nav>
            <Nav >
              <Nav.Link as='li'><Link to='/' className="links"><FontAwesomeIcon icon={faHome} />  Home</Link></Nav.Link>           
              <Nav.Link as='li'><Link to='/about' className="links"> <FontAwesomeIcon icon={faUsers} /> About Us </Link></Nav.Link> 
              
             
              <NavDropdown title={<><FontAwesomeIcon icon={faHamburger} style={{color:"white", marginTop:"2%"}}/> Services</>}  className="active">
                <NavDropdown.Item href="/service">Book My Table</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/myBookings">My Bookings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/myCompletedBookings">My Completed Bookings</NavDropdown.Item>
              </NavDropdown>
              
              <Nav.Link as='li'><Link to='/pricing' className="links"><FontAwesomeIcon icon={faTags} /> Pricing</Link></Nav.Link>
              <Nav.Link as='li'><Link to='/contact' className="links"><FontAwesomeIcon icon={faAddressBook} /> Contact Us</Link></Nav.Link>              
              <Nav.Link as='li'><Link to='/logout' className="links"><FontAwesomeIcon icon={faSignOutAlt} /> LogOut</Link></Nav.Link> 
              <Nav.Link as='li'><Link to='/profile' className="links"><FontAwesomeIcon icon={faUserCircle} style={{fontSize:"30px"}} /> </Link></Nav.Link>             
            </Nav>
          </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}
