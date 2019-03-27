import React, { Component } from "react";
import { Icon, Input, Table, Button } from "semantic-ui-react";
import addDeviceService from "./add-device-service";

class AddDevice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: "",
      devices: []
    };
    this.handleEventChange = this.handleEventChange.bind(this);
    this.searchForDevice = this.searchForDevice.bind(this);
    this.deviceSelected = this.deviceSelected.bind(this);
  }

  handleEventChange(event) {
    this.setState({ searchText: event.target.value });
  }

  searchForDevice = async event => {
    const searchText = this.state.searchText;
    const response = await addDeviceService.searchDevice(searchText);

    this.setState({ devices: response.data });
  };

  deviceSelected = async device => {
    device.isDeviceLinked = !device.isDeviceLinked;
    const promise = await addDeviceService.linkDevice(device);
    const devices = this.state.devices;
    let deviceIndex = -1;

    for (let i = 0; i < devices.length; i++) {
      if (devices[i].deviceId === device.deviceId) {
        deviceIndex = i;
        break;
      }
    }

    devices[deviceIndex] = device; // do nothing for now;
    await promise;

    if (process.status === 200) {
      this.setState({ devices: devices });
    }
  };

  render() {
    const devices = this.state.devices.map((device, key) => (
      <Table.Row key={device.deviceId}>
        <Table.Cell key={device.deviceId} width={12}>
          {device.serailNumber}
        </Table.Cell>
        <Table.Cell width={4} key={device.deviceId}>
          <Button size="mini" onClick={e => this.deviceSelected(device)}>
            {device.isDeviceLinked ? "unlink" : "link"}
          </Button>
        </Table.Cell>
      </Table.Row>
    ));
    return (
      <div>
        <Input
          icon={
            <Icon
              name="search"
              inverted
              circular
              link
              onClick={this.searchForDevice}
            />
          }
          placeholder="Search..."
          onChange={e => this.handleEventChange(e)}
        />
        <Table unstackable singleLine selectable size="small">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={12}>Serial Number</Table.HeaderCell>
              <Table.HeaderCell width={4} />
            </Table.Row>
          </Table.Header>
          <Table.Body>{devices}</Table.Body>
        </Table>
      </div>
    );
  }
}

export default AddDevice;
