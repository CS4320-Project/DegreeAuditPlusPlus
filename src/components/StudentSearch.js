import React, { Component } from "react";
import '../styles/StudentSearch.css';

export default class StudentSearch extends React.Component {
  render(){
    return(
      
        <div class="search-container">
        <h1>Search Student</h1>
    <form onSubmit={this.handleSubmit}>
      <input type="text" placeholder="Enter Student Number..." name="search"/>
      <button type="submit">
        </button>
    </form>
  </div>
        
        
      
    );
  }
}
