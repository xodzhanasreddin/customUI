import React from 'react';
import {mount} from 'enzyme';
import {Checkbox} from './Checkbox';
import {CheckboxType, RadioType} from '../../../lib';

describe('Checkbox component', () => {

  let component;
  let wrapper;
  let input;
  let inputIcon;
  let label;

  beforeEach(() => {
    component = mount(<Checkbox />);
    wrapper = component.find('label.Checkbox');
    input = wrapper.find('input');
    inputIcon = wrapper.find('span.Checkbox__input');
    label = wrapper.find('p.Checkbox__label');
  });

  it('should properly render by default', () => {
    expect(wrapper.hasClass('checked')).toBeFalsy();
    expect(wrapper.hasClass('disabled')).toBeFalsy();
    expect(inputIcon.hasClass('form-icon-checkbox')).toBeFalsy();
    expect(input.prop('type')).toEqual(CheckboxType.CHECKBOX);
    expect(label.exists()).toBeFalsy();

    expect(component.render()).toMatchSnapshot();
  });

  describe('should properly apply prop', () => {
    it('label', () => {
      const labelText = 'Some label text';
      component.setProps({labelText});
      expect(component.find('p.Checkbox__label').exists()).toBeTruthy();
      expect(component.find('p.Checkbox__label').text()).toEqual(labelText);

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
      component.setProps({type: RadioType.RADIO});
      input = wrapper.find('input');
      expect(input.prop('type')).toEqual(CheckboxType.CHECKBOX);
    });

    it('className', () => {
      const className = 'some-className';
      component.setProps({className});
      wrapper = component.find('label.Checkbox');
      input = wrapper.find('input');
      inputIcon = wrapper.find('span.Checkbox__input');
      expect(wrapper.hasClass(className)).toBeTruthy();
      expect(input.hasClass(className)).toBeFalsy();
      expect(inputIcon.hasClass(className)).toBeFalsy();

      expect(component.render()).toMatchSnapshot();
    });

    it('defaultChecked', () => {
      component.setProps({defaultChecked: true});
      wrapper = component.find('label.Checkbox');
      input = wrapper.find('input');
      expect(wrapper.hasClass('checked')).toBeTruthy();
      expect(input.prop('defaultChecked')).toBeTruthy();

      expect(component.render()).toMatchSnapshot();
    });

    it('checked', () => {
      component.setProps({checked: true});
      wrapper = component.find('label.Checkbox');
      input = wrapper.find('input');
      expect(wrapper.hasClass('checked')).toBeTruthy();
      expect(input.prop('checked')).toBeTruthy();

      expect(component.render()).toMatchSnapshot();
    });

    it('disabled', () => {
      component.setProps({disabled: true});
      wrapper = component.find('label.Checkbox');
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
