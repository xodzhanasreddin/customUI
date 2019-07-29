import React from 'react';
import {mount} from 'enzyme';
import {Button} from './Button';
import {ButtonIntent, IconName} from '../../lib';
import {Icon} from '../Icon/Icon';

describe('Button component', () => {

  let wrapper;
  let button;

  beforeEach(() => {
    wrapper = mount(<Button />);
  });

  it('render Button', () => {
    button = wrapper.find('button');
    expect(button.render()).toMatchSnapshot();
  });

  it('should render Button with correct default props', () => {
    button = wrapper.find('button');
    expect(button.text()).toEqual('Default button');
    expect(button.prop('className')).toEqual(`Button btn`);
  });

  it('should correct render Button with custom text', () => {
    const text = 'Custom button text';
    wrapper = mount(<Button>{text}</Button>);
    button = wrapper.find('button');
    expect(button.text()).toEqual(text);
  });

  describe('should properly apply "focused/disabled/hovered" props', () => {
    it('should add/remove "focus" css-class if focused === true/false', () => {
      wrapper.setProps({focused: true});
      button = wrapper.find('button');
      expect(button.hasClass('focus')).toBe(true);
      wrapper.setProps({focused: false});
      button = wrapper.find('button');
      expect(button.hasClass('focus')).toBe(false);
    });

    it('should add/remove "disabled" css-class if disabled === true/false', () => {
      wrapper.setProps({disabled: true});
      button = wrapper.find('button');
      expect(button.hasClass('disabled')).toBe(true);
      wrapper.setProps({disabled: false});
      button = wrapper.find('button');
      expect(button.hasClass('disabled')).toBe(false);
    });

    it('should add/remove "hover" css-class if hovered === true/false', () => {
      wrapper.setProps({hovered: true});
      button = wrapper.find('button');
      expect(button.hasClass('hover')).toBe(true);
      wrapper.setProps({hovered: false});
      button = wrapper.find('button');
      expect(button.hasClass('hover')).toBe(false);
    });
  });

  it('should properly apply "intent" prop', () => {
    for (const intent in ButtonIntent) {
      if (ButtonIntent.hasOwnProperty(intent)) {
        wrapper.setProps({intent: ButtonIntent[intent]});
        button = wrapper.find('button');
        expect(button.hasClass(ButtonIntent[intent])).toBe(true);
      }
    }
  });

  it('should call onClick when clicking on Button', () => {
    const onClick = jest.fn();
    wrapper.setProps({onClick});
    button = wrapper.find('button');
    button.simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should not call onClick when clicking on disabled Button', () => {
    const onClick = jest.fn();
    wrapper.setProps({disabled: true, onClick});
    button = wrapper.find('button');
    button.simulate('click');
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  it('should change tag to "a" when pass "href" prop', () => {
    wrapper.setProps({href: '#'});
    expect(wrapper.exists('button')).toBe(false);
    expect(wrapper.exists('a')).toBe(true);
  });

  it('should add svg icon prepend of text if "iconAppend === false"', () => {
    const icon = IconName.CALENDAR;
    wrapper.setProps({icon});
    button = wrapper.find('button');
    expect(button.hasClass('btn-icon-prepend')).toBe(true);
    expect(button.childAt(0).hasClass('btn-icon')).toBe(true);
    expect(button.find(Icon).prop(`iconName`)).toEqual(icon);

  });

  it('should add svg icon append of text if "iconAppend === true"', () => {
    const icon = IconName.CONNECTIONS;
    wrapper.setProps({icon, iconAppend: true});
    button = wrapper.find('button');
    expect(button.childAt(0).hasClass('btn-icon')).toBe(true);
    expect(button.hasClass('btn-icon-append')).toBe(true);
  });

});
