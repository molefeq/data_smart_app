import React from 'react';
import { shallow } from 'enzyme';
import DeviceList from './device-list';

describe('<DeviceList />', () => {
  test('renders', () => {
    const wrapper = shallow(<DeviceList />);
    expect(wrapper).toMatchSnapshot();
  });
});
