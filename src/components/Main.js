import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import LoginForm from './LoginForm';
import StudentSearch from './StudentSearch'

export default class Main extends React.Component {
  render(){
    return(
      <main>
        <Switch>

          <Route exact path='/home' component={Home}/>
          <Route path='/' component={LoginForm}/>
          <Route path='/login' component={LoginForm}/>
		  <Route path='/studentSearch' component={StudentSearch}/>

        </Switch>
      </main>
    );
  }
}
