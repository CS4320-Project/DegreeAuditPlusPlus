import React from 'react';
import '../styles/Footer.css';

export default class Header extends React.Component {

  render(){
    return(
      <footer>
        Copyright &copy; {(new Date().getFullYear())} Sara Caponi, Jamie Flores, Daniel Jaegers, Derek Rogers, Erika Eckfeld, Kate Gardner, Sohaila Bakr
      </footer>
    );
  }
}
