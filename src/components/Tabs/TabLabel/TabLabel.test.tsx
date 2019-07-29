import React from 'react';
import {shallow} from 'enzyme';
import {TabLabel, ITabLabelProps} from './TabLabel';

describe('TabLabel component', () => {

  const props: ITabLabelProps = {
    id: 0,
    label: 'Tab 1',
    isActive: true,
    onTabClick: jest.fn()
  };

  const wrapper = shallow(<TabLabel {...props} />);

  it('render Tab', () => {
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('should render label', () => {
    expect((wrapper.find('a').text())).toEqual(props.label);
  });

  it('should call onTabClick on TabLabel', () => {
    wrapper.find('li').simulate('click');
    expect(props.onTabClick).toHaveBeenCalled();
  });

});
