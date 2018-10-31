import React from "react";
import '../styles/StudentSearch.css';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';



export default class StudentSearch extends React.Component {
	
	constructor(props) {
    super(props);

    this.state = {
      studentNumber: ""    
    };
  }


	  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
	  
	  handleSubmit = event => {
    event.preventDefault();
	
	  if (this.state.studentNumber == "14261685" ){
		<Route exact path='/home' component={Home}/>
	  }
	  
	  else{
		   alert('The entered student number does not exist ' + this.state.studentNumber );
	  }

  }
	  
	  
	  
	  
  render(){
    return(

      
        <div class="search-container">
        <h1>Search Student</h1>
    <form class="textBox" onSubmit={this.handleSubmit}>
		
      <input
		type="text" 
		placeholder="Enter Student Number..."
		name="search"
		value={this.state.studentNumber}
        onChange={this.handleChange} />
		
      <button type="submit" value = "Submit">→
        </button>
    </form>
  </div>
        
        
      
    );
  }
}
