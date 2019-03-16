import React, { Component } from 'react';
import { Input, Menu, Icon, Sidebar } from 'semantic-ui-react'
import './header.css'; // Import regular styleshe
import { Route, Link, Switch } from 'react-router-dom'

class Header extends Component {
  state = { activeItem: '', visible: false };

  handleItemClick = (e, { name }) => {
    //this.setState({ activeItem: name }); 
    this.setState({ visible: true })
  };

  handleHideClick = () => {
    if (this.state.visible) {
      this.setState({ visible: false });
    }
  };

  handleShowClick = () => this.setState({ visible: true });
  handleSidebarHide = () => this.setState({ visible: false });

  render() {
    const { activeItem } = this.state.activeItem;
    const { visible } = this.state.visible;
    return (
      <div>
        <Menu className='header-menu'>
          <Menu.Item name='expandable' active={activeItem === 'expandable'} onClick={this.handleItemClick} className='xs-visible'>
            <Icon name='gamepad' />
          </Menu.Item>

          <Menu.Menu position='left'>
            <Menu.Item name='item1' active={activeItem === 'item1'} onClick={this.handleItemClick} className='xs-hidden menu-item' />
            <Menu.Item name='item2' active={activeItem === 'item2'} onClick={this.handleItemClick} className='xs-hidden menu-item' />
            <Menu.Item name='item3' active={activeItem === 'item3'} onClick={this.handleItemClick} className='xs-hidden menu-item' />
            <Menu.Item name='item4' active={activeItem === 'item4'} onClick={this.handleItemClick} className='menu-item' />
            <Menu.Item name='item5' active={activeItem === 'item5'} onClick={this.handleItemClick} className='menu-item' />
          </Menu.Menu>

          <Menu.Menu position='right'>
            <Menu.Item><Input icon='search' placeholder='Search...' /></Menu.Item>
            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>

        <Sidebar as={Menu} animation='overlay' icon='labeled' inverted vertical visible={visible} width='thin'>
          <Menu.Item>
            <Link to="/login"><Icon name='home' />Home</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/register"><Icon name='gamepad' />Games</Link>
          </Menu.Item>
          <Menu.Item as='a'>
            <Icon name='camera' />
            Channels
             </Menu.Item>
        </Sidebar>
      </div>
    )
  };
}

export default Header;
