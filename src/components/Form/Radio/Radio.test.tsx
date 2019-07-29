import React from 'react';
import {mount} from 'enzyme';
import {Radio} from './Radio';
import {RadioType, CheckboxType} from '../../../lib';

describe('Radio component', () => {

  let component;
  let wrapper;
  let input;
  let inputIcon;
  let label;

  beforeEach(() => {
    component = mount(<Radio />);
    wrapper = component.find('label.Radio');
    input = wrapper.find('input');
    inputIcon = wrapper.find('span.Radio__input');
    label = wrapper.find('p.Radio__label');
  });

  it('should properly render by default', () => {
    expect(wrapper.hasClass('checked')).toBeFalsy();
    expect(wrapper.hasClass('disabled')).toBeFalsy();
    expect(inputIcon.hasClass('form-icon-radio')).toBeFalsy();
    expect(input.prop('type')).toEqual(RadioType.RADIO);
    expect(label.exists()).toBeFalsy();

    expect(component.render()).toMatchSnapshot();
  });

  describe('should properly apply prop', () => {
    it('label', () => {
      const labelText = 'Some label text';
      component.setProps({labelText});
      expect(component.find('p.Radio__label').exists()).toBeTruthy();
      expect(component.find('p.Radio__label').text()).toEqual(labelText);

      expect(component.render()).toMatchSnapshot();
    });

    it('id', () => {
      const id = 'UnIqId';
      component.setProps({id});
      expect(component.find('label').prop('htmlFor')).toEqual(id);
      expect(component.find('input').prop('id')).toEqual(id);
      expect(component.find('label').prop('htmlFor'))
        .toEqual(component.find('input').prop('id'));

      expect(component.render()).toMatchSnapshot();
    });

    it('type', () => {
      component.setProps({type: CheckboxType.CHECKBOX});
      input = wrapper.find('input');
      expect(input.prop('type')).toEqual(RadioType.RADIO);
    });

    it('className', () => {
      const className = 'some-className';
      component.setProps({className});
      wrapper = component.find('label.Radio');
      input = wrapper.find('input');
      inputIcon = wrapper.find('span.Radio__input');
      expect(wrapper.hasClass(className)).toBeTruthy();
      expect(input.hasClass(className)).toBeFalsy();
      expect(inputIcon.hasClass(className)).toBeFalsy();

      expect(component.render()).toMatchSnapshot();
    });

    it('defaultChecked', () => {
      component.setProps({defaultChecked: true});
      wrapper = component.find('label.Radio');
      input = wrapper.find('input');
      expect(wrapper.hasClass('checked')).toBeTruthy();
      expect(input.prop('defaultChecked')).toBeTruthy();

      expect(component.render()).toMatchSnapshot();
    });

    it('checked', () => {
      component.setProps({checked: true});
      wrapper = component.find('label.Radio');
      input = wrapper.find('input');
      expect(wrapper.hasClass('checked')).toBeTruthy();
      expect(input.prop('checked')).toBeTruthy();

      expect(component.render()).toMatchSnapshot();
    });

    it('disabled', () => {
      component.setProps({disabled: true});
      wrapper = component.find('label.Radio');
      input = wrapper.find('input');
      expect(wrapper.hasClass('disabled')).toBeTruthy();
      expect(input.prop('disabled')).toBeTruthy();

      expect(component.render()).toMatchSnapshot();
    });
  });

  it('should call onChange when input clicking', () => {
    const handleChange = () => component.setProps({checked: true});
    component.setProps({onChange: handleChange});
    input.simulate('change');
    input = component.find('input');
    expect(input.prop('checked')).toBeTruthy();

    expect(component.render()).toMatchSnapshot();
  });

});
