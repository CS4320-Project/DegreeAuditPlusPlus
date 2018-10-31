import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import LoginForm from './LoginForm';

export default class Main extends React.Component {
  render(){
    return(
      <main>
        <Switch>
          <Route exact path='/home' render={() => <Home student={this.props.student}/>} />
          <Route path='/' component={LoginForm}/>
          <Route path='/login' component={LoginForm}/>
        </Switch>
      </main>
    );
  }
}
