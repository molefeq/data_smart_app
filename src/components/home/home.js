import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'

const items = [
  {
    header: 'Welcome Abroad.',
    description: 'Welcome to MVP app. Please add a device, buy mobile data and connect to the world whenever you are.',
    meta: '',
  }
];

class Home extends Component {
  render() {
    return <Card.Group centered items={items} />;
  }
}

export default Home;
