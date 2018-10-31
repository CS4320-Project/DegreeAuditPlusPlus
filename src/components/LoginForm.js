import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../styles/LoginForm.css";

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
    console.dir(this.props);
    if(this.state.pawPrint === 'sbc436'){
      this.props.childProps.userHasAuthenticated(true);
    } else {
    }
  }

  render() {
    return (
      <div>

      <div class="jumbotron">
          <div class="container">
          <h1 class="display-4"><span class="yellow">DEGREE<span class="white">AUDIT</span>++</span></h1>
          <p class="lead">An easy way to plan out your remaining semsters at the University of Missouri - Columbia.</p>
        </div>
      </div>

      <div className="LoginForm">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="pawPrint" bsSize="large">
            <ControlLabel>PawPrint</ControlLabel>
            <FormControl
              autoFocus
              type="pawPrint"
              value={this.state.pawPrint}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>

          <Button id="loginButton"
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>

        </form>
      </div>
      </div>
    );
  }
}
