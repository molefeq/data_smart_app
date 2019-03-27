import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './notifications';

describe('<Notifications />', () => {
  test('renders', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper).toMatchSnapshot();
  });
});
