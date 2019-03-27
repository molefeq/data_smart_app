import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "../../../components/home/home";
import BuyData from "../../../components/buy-data/buy-data";
import AddDevice from "../../../components/add-device/add-device";
import Register from "../../../components/register/register";
import Login from "../../../components/login/login";
import DeviceList from "../../../components/device-list/device-list";
import ForgotPassword from "../../../components/forgot-password/forgot-password";
import { Menu, Sidebar, Grid } from "semantic-ui-react";
import PrivateRoute from "../../routing/private-route";
import authenticationService from  '../../services/authentication-service/authentication-service';
import './main.css'

class Main extends Component {
  constructor(props) {
    super(props);
    this.goToAddDevice = this.goToAddDevice.bind(this);
    this.goToBuyData = this.goToBuyData.bind(this);
    this.logOut = this.logOut.bind(this);
  };

  handleSidebarHide = () => {
    this.props.sideBarChange(false);
  };

  goToAddDevice() {
    this.props.sideBarChange(false);
    this.props.history.push('/adddevice');
  }

  goToBuyData() {
    this.props.sideBarChange(false);
    this.props.history.push('/buydata');
  }

  logOut() {
    this.props.sideBarChange(false);
    authenticationService.signOut();
    this.props.history.push('/login');
  }

  render() {
    const visible = this.props.visible;
    return (
      <Sidebar.Pushable className="page">
        <Sidebar as={Menu} animation="overlay" icon="labeled" inverted onHide={this.handleSidebarHide} vertical visible={visible} width="thin">
          <Menu.Item as="a" onClick={this.goToAddDevice} className={'left-sidebar'}>
            Add Device
          </Menu.Item>
          <Menu.Item as="a" onClick={this.goToBuyData} className={'left-sidebar'}>
            Buy Data
          </Menu.Item>
          <Menu.Item as="a" onClick={this.logOut} className={'left-sidebar'}>
            Sign Out
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher className="page-container" onClick={this.handleHideClick}>
          <Grid celled className="main-grid">
            <Grid.Row className="main">
              <Grid.Column>
                <Switch>
                  <PrivateRoute exact path="/" component={Home} />
                  <PrivateRoute path="/home" component={Home} />
                  <Route path="/login" component={Login} />
                  <Route path="/register" component={Register} />
                  <PrivateRoute path="/buydata" component={BuyData} />
                  <PrivateRoute path="/adddevice" component={AddDevice} />
                  <PrivateRoute path="/devices" component={DeviceList} />
                  <Route path="/forgot-password" component={ForgotPassword} />
                </Switch>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

export default withRouter(Main);
