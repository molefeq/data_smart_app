import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/home/home';
import Register from './components/register/register';
import Login from './components/login/login';

class Main extends Component {
  render() {
    return
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>;
  }
}

export default Main;
