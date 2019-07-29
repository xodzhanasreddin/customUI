import React from 'react';
import {mount} from 'enzyme';
import {Icon} from './Icon';
import {IconName} from '../../lib';

describe('Icon component', () => {

  const wrapper = mount(<Icon iconName={IconName.ARROW_DOWN} />);

  it('render Icon', () => {
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('should properly apply "icon" prop', () => {
    for (const name in IconName) {
      if (IconName.hasOwnProperty(name)) {
        wrapper.setProps({iconName: IconName[name]});
        const icon = wrapper.find('svg');
        expect(icon.hasClass(`Icon Icon-${IconName[name]}`)).toBe(true);
      }
    }
  });

});
