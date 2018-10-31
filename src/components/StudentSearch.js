import React from "react";
import '../styles/StudentSearch.css';

export default class StudentSearch extends React.Component {
  render(){
    return(
      <div className="search-container">
        <h3>Search Student</h3>
        <form className="textBox" onSubmit={this.handleSubmit}>
          <input  type="text" placeholder="Enter Student Number..." name="search"/>
          <button type="submit">→
          </button>
        </form>
      </div>
    );
  }
}
