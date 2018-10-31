import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import '../styles/Header.css';
import {Navbar, NavItem, Nav} from 'react-bootstrap';

export default class Header extends React.Component {
  handleLogout = event => {
    this.props.childProps.userHasAuthenticated(false);
  }

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
              {this.props.childProps.isAuthenticated
              ? <Fragment>
                  <LinkContainer to="/login">
                    <NavItem onClick={this.handleLogout} componentClass="span">Log Out</NavItem>
                  </LinkContainer>
                </Fragment>
              : <Fragment>
                  <LinkContainer to='/login'>
                    <NavItem>Log in</NavItem>
                  </LinkContainer>
                </Fragment>}

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}
