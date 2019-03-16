import React, { Component } from "react";
import { Input, Menu, Icon, Sidebar } from "semantic-ui-react";
import "./header.css"; // Import regular styleshe
import { Route, Link, Switch } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  handleShowClick = () => this.props.sideBarChange(true);

  render() {
    return (
      <div>
        <Menu widths={5}>
          <Menu.Item
            name="expandable"
            onClick={this.handleShowClick}
            className="xs-visible"
          >
            <Icon name="align justify" />
          </Menu.Item>
          <Menu.Item
            name="expandable"
            onClick={this.handleItemClick}
            className="xs-visible"
          >
            <Icon name="user" />
          </Menu.Item>
          <Menu.Item
            name="expandable"
            onClick={this.handleItemClick}
            className="xs-visible"
          >
            <Icon name="wifi" />
          </Menu.Item>
          <Menu.Item
            name="expandable"
            onClick={this.handleItemClick}
            className="xs-visible"
          >
            <Icon name="mail" />
          </Menu.Item>
          <Menu.Item
            name="expandable"
            onClick={this.handleItemClick}
            className="xs-visible"
          >
            <Icon name="bell" />
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Header;
