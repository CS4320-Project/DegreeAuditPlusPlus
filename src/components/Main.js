import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import LoginForm from './LoginForm';

export default class Main extends React.Component {
  render(){
    return(
      <main>
        <Switch>
          <Route exact path='/home' render={() => <Home student={this.props.student} childProps={this.props.childProps}/>} />
          <Route path='/' render={() => <LoginForm childProps={this.props.childProps}/>}/>
          <Route path='/login' render={() => <LoginForm childProps={this.props.childProps}/>} />
        </Switch>
      </main>
    );
  }
}
