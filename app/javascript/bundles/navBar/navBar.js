import React from 'react';
import { Link } from 'react-router';
import { Navbar, FormGroup, FormControl, Button, Nav, NavDropdown, NavItem } from 'react-bootstrap';
import BackButton from './BackButton';

const NavBar = (props) => {
  return(
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/" className="hvr-grow">TOURAGE</a>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
  )
}


export default NavBar;
