import React from 'react';
import {ButtonToolbar, Button} from 'react-bootstrap';


export default class ToggleButtons extends React.Component {
  render(){
    return(
    
		<div>
		<ButtonToolbar>
    	<Button bsStyle="primary" bsSize="large"> Past Classes </Button>
		<Button bsStyle="primary" bsSize="large"> Current Classes </Button>
		<Button bsStyle="primary" bsSize="large"> Outstanding Classes </Button>
		  </ButtonToolbar>
		</div>
    );
  }
}