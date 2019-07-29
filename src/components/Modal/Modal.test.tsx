import React from 'react';
import {mount} from 'enzyme';
import {Modal, IModalProps} from './Modal';
import {ButtonIntent} from '../../lib';
import {Button} from '..';

describe('Modal component', () => {

  let component;
  let wrapper;
  let modalButton;
  let modalButtonClose;
  let modalTitle;
  let modalbody;

  const props: IModalProps = {
    id: 'uniqId',
    buttonText: 'Открыть'
  };

  beforeEach(() => {
    component = mount(<Modal {...props} />);
    wrapper = component.find('div.Modal');
  });

  it('render Button', () => {
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('should properly render by default', () => {
    modalButton = component.find('button.Modal-button');
    modalTitle = component.find('.modal-title');
    expect(modalButton.text()).toEqual(props.buttonText);
    expect(modalButton.hasClass('btn-lg')).toBeTruthy();
    expect(modalTitle.exists()).toBeFalsy();

    expect(component.render()).toMatchSnapshot();
  });

  describe('should properly apply prop', () => {

    it('className', () => {
      const className = 'some-className';
      component.setProps({className});
      wrapper = component.find('div.Modal');
      expect(wrapper.hasClass(className)).toBeTruthy();

      expect(component.render()).toMatchSnapshot();
    });

    it('buttonText', () => {
      const buttonText = 'Some button text';
      component.setProps({buttonText});
      modalButton = component.find('button.Modal-button');
      expect(modalButton.text()).toEqual(buttonText);

      expect(component.render()).toMatchSnapshot();
    });

    it('buttonIntent', () => {
      for (const intent in ButtonIntent) {
        if (ButtonIntent.hasOwnProperty(intent)) {
          component.setProps({buttonIntent: ButtonIntent[intent]});
          modalButton = component.find('button.Modal-button');
          modalButtonClose = component.find('button.Modal-button__close');
          expect(modalButton.hasClass(ButtonIntent[intent])).toBeTruthy();
          expect(modalButtonClose.hasClass(ButtonIntent[intent])).toBeTruthy();
        }
      }
    });

    it('buttonLarge', () => {
      component.setProps({buttonLarge: false});
      modalButton = component.find('button.Modal-button');
      expect(modalButton.hasClass('btn-lg')).toBeFalsy();

      expect(component.render()).toMatchSnapshot();

      component.setProps({buttonLarge: true});
      modalButton = component.find('button.Modal-button');
      expect(modalButton.hasClass('btn-lg')).toBeTruthy();

      expect(component.render()).toMatchSnapshot();
    });

    it('modalTitle', () => {
      const title = 'Some modal title';
      component.setProps({modalTitle: title});
      modalTitle = component.find('.modal-title');
      expect(modalTitle.exists()).toBeTruthy();
      expect(modalTitle.text()).toEqual(title);

      expect(component.render()).toMatchSnapshot();
    });

  });

  it('should properly render children', () => {
    const content = 'Some modal content';
    component = mount(
      <Modal {...props}>
        {content}
        <Button />
      </Modal>
    );
    modalbody = component.find('.modal-body');
    expect(modalbody.contains(content)).toBeTruthy();
    expect(modalbody.find(Button).exists()).toBeTruthy();

    expect(component.render()).toMatchSnapshot();
  });

});
