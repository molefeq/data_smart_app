import React, { Component } from "react";
import "./App.css";
import { withRouter } from "react-router-dom";
import Header from "./shared/layout/header/header";
import Main from "./shared/layout/main/main";
import { VIEWS } from "./shared/services/constants";
import  './shared/services/axios/request-interceptor'
import  './shared/services/axios/response-interceptor'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false, isHeaderVisible: false };
    this.sideBarChange = this.sideBarChange.bind(this);
  }

  sideBarChange = visible => {
    this.setState({ visible: visible });
  };

  componentDidMount() {
    const currentView = VIEWS[this.props.location.pathname];

    this.setState({
      isHeaderVisible: Boolean(currentView) && currentView.requiresHeader
    });
  };

  componentDidUpdate(prevProps) {    
    if (this.props.location === prevProps.location) {
      return;
    }

    const currentView = VIEWS[this.props.location.pathname];

    this.setState({
      isHeaderVisible: Boolean(currentView) && currentView.requiresHeader
    });
  };

  onRouteChanged() {
    console.log("ROUTE CHANGED");
  }

  render() {
    const visible = this.state.visible;
    const isHeaderVisible = this.state.isHeaderVisible;
    return (
      <div>
        {isHeaderVisible ? <Header sideBarChange={this.sideBarChange} /> : null}
        <Main visible={visible} sideBarChange={this.sideBarChange} />
      </div>
    );
  }
}

export default withRouter(App);
