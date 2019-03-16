import React, { Component } from 'react';
import './App.css';
import { Container, Icon, Menu, Sidebar } from 'semantic-ui-react'
import { Route, Link, Switch } from 'react-router-dom'
import Home from './components/home/home';
import Register from './components/register/register';
import Login from './components/login/login';
import Header from './shared/layout/header/header';

class App extends Component {
  state = { visible: false }

  handleHideClick = () => {
    if (this.state.visible) {
      this.setState({ visible: false });
    }
  }
  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state
    return (
      <Container fluid>
        <Header></Header>
      </Container>
      // <Sidebar.Pushable className="page">
      //   <Sidebar as={Menu} animation='overlay' icon='labeled' inverted vertical visible={visible} width='thin'>
      //     <Menu.Item>
      //       <Link to="/login"><Icon name='home' />Home</Link>
      //     </Menu.Item>
      //     <Menu.Item>
      //       <Link to="/register"><Icon name='gamepad' />Games</Link>
      //     </Menu.Item>
      //     <Menu.Item as='a'>
      //       <Icon name='camera' />
      //       Channels
      //       </Menu.Item>
      //   </Sidebar>


      //   <Sidebar.Pusher className="page-container" onClick={this.handleHideClick}>
      //     <Grid celled className="main-grid">
      //       <Grid.Row className="main">
      //         <Grid.Column width={3} className="left-side-bar">
      //           <Icon name='server' onClick={this.handleShowClick} fitted={true} />
      //         </Grid.Column>
      //         <Grid.Column width={13}>
      //           <Switch>
      //             <Route exact path="/" component={Home} />
      //             <Route path="/home" component={Home} />
      //             <Route path="/login" component={Login} />
      //             <Route path="/register" component={Register} />
      //           </Switch>
      //         </Grid.Column>
      //       </Grid.Row>
      //     </Grid>
      //   </Sidebar.Pusher>
      // </Sidebar.Pushable >
    );
  }
}

export default App;
