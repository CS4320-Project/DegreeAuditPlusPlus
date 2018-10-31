import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../styles/Login.css";
import Home from './Home';
import StudentSearch from './StudentSearch'
import { Switch, Route } from 'react-router-dom';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pawPrint: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.pawPrint.length > 0 && this.state.password.length > 0;
  }
	
	
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
	
	  if (this.state.pawPrint == "sbc436" && this.state.password == "1234"){
		<Route exact path='/home' component={Home}/>
	  }
	  else if (this.state.pawPrint == "NBalser" && this.state.password == "1234"){
			  <Route exact path='/studentSearch' component={StudentSearch}/>
		  }
	  
	  else{
		   alert('Username or password is incorrect! ' + this.state.pawPrint );
	  }

  }
  

  render() {
    return (
      <div className="LoginForm">
        <form onSubmit={this.handleSubmit}>
          <FormGroup id="spacing" controlId="pawPrint" bsSize="large">
            <ControlLabel>PawPrint</ControlLabel>
            <FormControl
              autoFocus
              type="pawPrint"
              value={this.state.pawPrint}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup id="spacing" controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button id="spacing"
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
			value = "Submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}
