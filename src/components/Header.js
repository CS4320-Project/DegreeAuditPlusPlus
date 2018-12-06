import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import '../styles/Header.css';
import {Navbar, NavItem, Nav} from 'react-bootstrap';

export default class Header extends React.Component {
  handleLogout = event => {
    this.props.childProps.userHasAuthenticated(false, null);
  }

  render(){

  // Determine which login button to display
    let loginButton;
    if(this.props.childProps.isAuthenticated === 'true'){
      loginButton = <Fragment><LinkContainer to="/login"><NavItem onClick={this.handleLogout} componentClass="span" className="hlButton">Log Out</NavItem></LinkContainer></Fragment>;
    } else {
      loginButton = <Fragment><LinkContainer to='/login'><NavItem componentClass="span" className="hlButton">Log in</NavItem></LinkContainer></Fragment>;
    }

    //information that is displayed in the navigation bar

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
              <NavItem componentClass="span" className="hlButton"></NavItem>
              {loginButton}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}
