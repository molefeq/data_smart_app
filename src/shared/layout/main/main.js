import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from '../../../components/home/home';
import Register from '../../../components/register/register';
import Login from '../../../components/login/login';
import { Container, Icon, Menu, Sidebar, Grid } from 'semantic-ui-react';

class Main extends Component {

  constructor(props) {
    super(props);
  }
  handleSidebarHide = () => {
    this.props.sideBarChange(false);
  };

  render() {
    const visible  = this.props.visible
    return(
    <Sidebar.Pushable className="page">
     <Sidebar as={Menu} animation='overlay' icon='labeled' inverted onHide={this.handleSidebarHide}
              vertical visible={visible} width='thin'>
          <Menu.Item as='a'>Add Device</Menu.Item>
          <Menu.Item as='a'>Buy Data</Menu.Item>
          <Menu.Item as='a'>Sign Out</Menu.Item>
     </Sidebar>

     <Sidebar.Pusher className="page-container" onClick={this.handleHideClick}>
        <Grid celled className="main-grid">
          <Grid.Row className="main">
            <Grid.Column>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
              </Switch>
           </Grid.Column>
         </Grid.Row>
       </Grid>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
    )
  }
}

export default Main;
