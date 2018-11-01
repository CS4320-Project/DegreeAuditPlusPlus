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

          <Route path='/home' render={() => <Home student={this.props.user} childProps={this.props.childProps}/>} />
          <Route exact path='/' render={() => <LoginForm childProps={this.props.childProps}/>}/>
          <Route path='/login' render={() => <LoginForm childProps={this.props.childProps}/>} />
		      <Route path='/studentSearch' component={StudentSearch}/>

        </Switch>
      </main>
    );
  }
}
