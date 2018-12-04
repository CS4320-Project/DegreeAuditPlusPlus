import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import '../styles/Footer.css';

export default class Header extends React.Component {

  render(){
    return(
      <div id="footerDiv">
        Copyright &copy; {(new Date().getFullYear())} Sara Caponi, Jamie Flores, Daniel Jaegers, Derek Rogers, Erika Eckfeld, Kate Gardner, Sohaila Bakr
      </div>
    );
  }
}
