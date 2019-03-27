import React from 'react';
import { shallow } from 'enzyme';
import AddDevice from './add-device';

describe('<AddDevice />', () => {
  test('renders', () => {
    const wrapper = shallow(<AddDevice />);
    expect(wrapper).toMatchSnapshot();
  });
});
