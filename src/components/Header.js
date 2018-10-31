import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import {Navbar, NavItem, Nav} from 'react-bootstrap';

export default class Header extends React.Component {
  render(){
    return(
      <header>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/home">DegreeAudit++</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem componentClass="span"><Link to='home'>Home</Link></NavItem>
              <NavItem componentClass="span"><Link to='login'>Log Out</Link></NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}
