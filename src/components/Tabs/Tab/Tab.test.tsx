import React from 'react';
import {shallow} from 'enzyme';
import {Tab, ITabProps} from './Tab';
import {ItemFirst} from '../../../mocks/components';

describe('Tab component', () => {

  const props: ITabProps = {
    label: 'Tab 1',
    panel: <ItemFirst />
  };

  const wrapper = shallow(<Tab {...props} />);

  it('render Tab', () => {
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('should render panel', () => {
    expect(wrapper.contains(<ItemFirst />)).toBe(true);
  });

});
