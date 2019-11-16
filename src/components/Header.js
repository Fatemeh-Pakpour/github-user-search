import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Header = ()=> {
  return(
<Navbar bg="success" variant="dark">
    <Navbar.Brand href="#home"><FontAwesomeIcon icon={faGithub}/></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#">Home</Nav.Link>
      <Nav.Link href="users">About</Nav.Link>
    </Nav>
  </Navbar>
  

  )
}

export default Header;