import React from 'react';
import { shallow } from 'enzyme';
import BuyData from './buy-data';

describe('<BuyData />', () => {
  test('renders', () => {
    const wrapper = shallow(<BuyData />);
    expect(wrapper).toMatchSnapshot();
  });
});
