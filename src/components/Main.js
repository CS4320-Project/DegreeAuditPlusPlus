import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import LoginForm from './LoginForm';
import StudentSearch from './StudentSearch';

export default class Main extends React.Component {
  render(){
    return(
      <main>
        <Switch>
          {/*
          /*displays the correct screen to the user based on the information provided.
          Also renders information to be displayed in a declared page.
          */}
          <Route path='/home' render={() => <Home student={this.props.user} childProps={this.props.childProps}/>} />
          <Route exact path='/' render={() => <LoginForm childProps={this.props.childProps}/>}/>
          <Route path='/login' render={() => <LoginForm childProps={this.props.childProps}/>} />
		      <Route path='/studentSearch' render={() => <StudentSearch childProps={this.props.childProps}/>}/>

        </Switch>
      </main>
    );
  }
}
