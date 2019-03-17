import React, { Component } from 'react';
import './App.css';
import { Container, Icon, Menu, Sidebar } from 'semantic-ui-react';
import { Route, Link, Switch } from 'react-router-dom'
import Home from './components/home/home';
import Register from './components/register/register';
import Login from './components/login/login';
import Header from './shared/layout/header/header';
import Main from './shared/layout/main/main';

class App extends Component {
  state = { visible: false }

  sideBarChange = (visible) => {
    this.setState({ visible: visible });
  };

  render() {
    const visible = this.state.visible
    return (
      <div>
        <Header sideBarChange={this.sideBarChange}></Header>
        <Main visible={visible} sideBarChange={this.sideBarChange}></Main>
      </div>
      
    );
  }
}

export default App;
