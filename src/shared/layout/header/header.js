import React, { Component } from "react";
import { Menu, Icon, Image, Dropdown} from "semantic-ui-react";
import "./header.css"; // Import regular styleshe
import { withRouter} from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.navigate = this.navigate.bind(this);
  }

  handleShowClick = () => this.props.sideBarChange(true);
  navigate = (route) => this.props.history.push(route);

  render() {
    return (
      <div>
        <Menu widths={5} className='xs-mobile'>
          <Menu.Item name="expandable" onClick={this.handleShowClick}>
            <Icon name="align justify" />
          </Menu.Item>
          <Menu.Item name="user">
              <Icon name="user" />
          </Menu.Item>
          <Menu.Item name="devices" onClick={(e) => this.navigate('/devices')}>
            <Icon name="wifi" />
          </Menu.Item>
          <Menu.Item name="messages">
            <Icon name="mail" />
          </Menu.Item>
          <Menu.Item name="notifications">
            <Icon name="bell" />
          </Menu.Item>
        </Menu>
        <Menu className='xs-screen'>
          <Menu.Item name='home' onClick={(e) => this.navigate('/home')}>
            <Image src='../../../assets/images/logo.png'></Image>
          </Menu.Item>
          <Menu.Item name='add-device' onClick={(e) => this.navigate('/adddevice')}>
            Add Device
          </Menu.Item>
          <Menu.Item name='devices' onClick={(e) => this.navigate('/devices')}>
            Devices
          </Menu.Item>
          <Menu.Item name='buy-data' onClick={(e) => this.navigate('/buydata')}>
            Buy Data
          </Menu.Item>
          
        <Menu.Menu position='right'>
          <Menu.Item name='notifications' link={true} onClick={(e) => this.navigate('/notifications')}>
            <Icon name="bell" />
          </Menu.Item>
          <Menu.Item name="messages" link={true} onClick={(e) => this.navigate('/messages')}>
            <Icon name="mail" />
          </Menu.Item>
          <Menu.Item name="user" link={true}>
            <Dropdown item icon='user'>
              <Dropdown.Menu> 
                <Dropdown.Item>Profile</Dropdown.Item>
                <Dropdown.Item>Sign Out</Dropdown.Item>
              </Dropdown.Menu>
           </Dropdown>
          </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default withRouter(Header);
