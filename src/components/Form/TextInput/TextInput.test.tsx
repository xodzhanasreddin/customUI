import React from 'react';
import {shallow, mount} from 'enzyme';

import {TextInput} from '../TextInput/TextInput';
import {TextInputType} from '../../../lib';

describe('TextInput component', () => {

  let component;
  let wrapper;
  let input;

  beforeEach(() => {
    component = mount(<TextInput />);
    wrapper = component.find('div.TextInput.form-group');
    input = wrapper.find('input');
  });

  it('should properly render by default', () => {
    expect(wrapper.hasClass('disabled')).toBeFalsy();
    expect(input.prop('type')).toEqual(TextInputType.TEXT);
    expect(component.find('label').exists()).toBeFalsy();
    expect(component.find('span.help-block').exists()).toBeFalsy();
    expect(component.render()).toMatchSnapshot();
  });

  describe('should properly apply prop', () => {
    it('label', () => {
      const labelText = 'Some label text';
      component.setProps({labelText});
      expect(component.find('label').exists()).toBeTruthy();
      expect(component.find('label').text()).toEqual(labelText);
      expect(component.render()).toMatchSnapshot();
    });

    it('id', () => {
      const id = 'UnIqId';
      const labelText = 'Some label text';
      component.setProps({id, labelText});
      expect(component.find('label').prop('htmlFor')).toEqual(id);
      expect(component.find('input').prop('id')).toEqual(id);
      expect(component.find('label').prop('htmlFor'))
        .toEqual(component.find('input').prop('id'));
      expect(component.render()).toMatchSnapshot();
    });

    it('type', () => {
      for (const type in TextInputType) {
        if (TextInputType.hasOwnProperty(type)) {
          component.setProps({type: TextInputType[type]});
          const input = component.find('input');
          expect(input.prop('type')).toEqual(TextInputType[type]);
          expect(component.render()).toMatchSnapshot();
        }
      }
    });

    it('className', () => {
      const className = 'some-className';
      component.setProps({className});
      const wrapper = component.find('div.TextInput.form-group');
      const input = wrapper.find('input');
      expect(wrapper.hasClass(className)).toBeTruthy();
      expect(input.hasClass(className)).toBeFalsy();
      expect(component.render()).toMatchSnapshot();
    });

    it('with error', () => {
      component.setProps({hasError: true});
      const wrapper = component.find('div.TextInput');
      expect(wrapper.hasClass('has-error')).toEqual(true);
    });

    it('with help message', () => {
      const helpMessage = 'This is help message!!!';
      component.setProps({helpMessage});
      expect(component.find('span.help-block').exists()).toBeTruthy();
      expect(component.find('span.help-block').text()).toEqual(helpMessage);
      expect(component.render()).toMatchSnapshot();
    });
  });

  it('should properly change value', () => {
    const component = shallow(<TextInput />);
    const handleChange = jest.fn();
    component.setProps({onChange: handleChange, type: TextInputType.TEXT});
    component.find('input').simulate('change', {target: {value: 'a'}});
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith({target: {value: 'a'}});
    expect(component.render()).toMatchSnapshot();
  });

});
