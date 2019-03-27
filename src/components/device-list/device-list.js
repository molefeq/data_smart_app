import React, { Component } from "react";
import { Grid, Card } from "semantic-ui-react";
import deviceListService from "./device-list-service";

class DeviceList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      devices: []
    };
  }
  
  componentDidMount = async () => {
    const response = await deviceListService.getLinkedDevices();

    this.setState({ devices: response.data });
  };

  render() {
    const devices = this.state.devices.map((device, key) => (
      <Card raised>
        <Grid columns="two">
          <Grid.Row>
            <Grid.Column width={7}>Device Id </Grid.Column>
            <Grid.Column>{device.deviceId}</Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={7}>Device Name </Grid.Column>
            <Grid.Column>{device.deviceName}</Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={7}>Serial Number </Grid.Column>
            <Grid.Column>{device.serailNumber}</Grid.Column>
          </Grid.Row>
        </Grid>
      </Card>
    ));
    return (
      <div>
        <Card.Group itemsPerRow={4}>{devices}</Card.Group>
      </div>
    );
  }
}

export default DeviceList;
