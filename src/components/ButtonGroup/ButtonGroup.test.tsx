import React from 'react';
import {shallow, mount} from 'enzyme';
import {ButtonGroup} from './ButtonGroup';
import {Button} from '../Button/Button';

describe('ButtonGroup component', () => {

  it('render only children with type "Button"', () => {
    const text = {
      ONE: 'This is section tag',
      TWO: 'Button 1',
      THREE: 'Button 2',
      FOUR: 'Hello!',
      FIVE: 'Button 3',
      SIX: 123,
      SEVEN: 'Button 4',
      EIGHT: true
    };
    const wrapper = mount(
      <ButtonGroup>
        <section>{text.ONE}</section>
        <div><Button>{text.TWO}</Button></div>
        <Button>{text.THREE}</Button>
        {text.FOUR}
        <Button>{text.FIVE}</Button>
        {text.SIX}
        (() => <Button>{text.SEVEN}</Button>)()
        {text.EIGHT}
      </ButtonGroup>
    );
    const buttonGroup = wrapper.find('div');
    React.Children
      .forEach(buttonGroup.children(), (child: React.ReactElement<any>) => {
        expect(child.type).toEqual(Button);
      });
    expect(buttonGroup.childAt(0).find('button').text()).toEqual(text.THREE);
    expect(buttonGroup.childAt(1).find('button').text()).toEqual(text.FIVE);
    expect(buttonGroup.childAt(2).find('button').text()).toEqual(text.SEVEN);
  });

  it('set default "false" value to children prop "large"', () => {
    const wrapper = mount(
      <ButtonGroup>
        <Button large={true}>Button 1</Button>
        <Button large={true}>Button 2</Button>
      </ButtonGroup>
    );
    const buttonGroup = wrapper.find('div');
    React.Children
      .forEach(buttonGroup.children(), (child: React.ReactElement<any>) => {
        expect(child.props.large).toEqual(false);
      });
  });

  it('change children prop "large"', () => {
    const wrapper = mount(
      <ButtonGroup>
        <Button large={true}>Button 1</Button>
        <Button large={false}>Button 2</Button>
      </ButtonGroup>
    );
    let buttonGroup = wrapper.find('div');
    React.Children
      .forEach(buttonGroup.children(), (child: React.ReactElement<any>) => {
        expect(child.props.large).toEqual(false);
      });

    wrapper.setProps({large: true});
    buttonGroup = wrapper.find('div');
    React.Children
      .forEach(buttonGroup.children(), (child: React.ReactElement<any>) => {
        expect(child.props.large).toEqual(true);
      });
  });

  it('wrapper has default class name "buttons-group"', () => {
    const wrapper = mount(
      <ButtonGroup>
        <Button>Button 1</Button>
      </ButtonGroup>
    );
    const buttonGroup = wrapper.find('div');
    expect(buttonGroup.hasClass('btn-group')).toEqual(false);
    expect(buttonGroup.hasClass('buttons-group')).toEqual(true);
  });

  it('change wrapper`s class name when "indented" prop value set to "false"', () => {
    const wrapper = mount(
      <ButtonGroup>
        <Button>Button 1</Button>
      </ButtonGroup>
    );
    wrapper.setProps({indented: false});
    const buttonGroup = wrapper.find('div');
    expect(buttonGroup.hasClass('btn-group')).toEqual(true);
    expect(buttonGroup.hasClass('buttons-group')).toEqual(false);
  });

});
