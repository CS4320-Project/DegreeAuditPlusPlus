import React from 'react';
import {ButtonToolbar, Button} from 'react-bootstrap';
import "../styles/ToggleButtons.css";


export default class ToggleButtons extends React.Component {
  render(){
    return(

		<div id="buttonDiv">
		<ButtonToolbar>
    	<Button bsStyle="success" bsSize="large"> Past Classes </Button>
		  <Button bsStyle="warning" bsSize="large"> Current Classes </Button>
		  <Button bsStyle="danger" bsSize="large"> Outstanding Classes </Button>
		  </ButtonToolbar>
		</div>
    );
  }
}
