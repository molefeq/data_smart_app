import React, { Component } from "react";
import { Menu, Icon, Image, Dropdown} from "semantic-ui-react";
import "./header.css"; // Import regular styleshe
import { withRouter} from "react-router-dom";
import logo from '../../../assets/images/logo.png'; // Tell Webpack this JS file uses this image

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
        </Menu>
        <Menu className='xs-screen'>
          <Menu.Item name='home' onClick={(e) => this.navigate('/home')}>
            <Image src={logo}></Image>
          </Menu.Item>
          
        <Menu.Menu position='right'>
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
