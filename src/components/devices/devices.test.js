import React from 'react';
import { shallow } from 'enzyme';
import Devices from './devices';

describe('<Devices />', () => {
  test('renders', () => {
    const wrapper = shallow(<Devices />);
    expect(wrapper).toMatchSnapshot();
  });
});
