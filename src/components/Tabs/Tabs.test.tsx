import React from 'react';
import {shallow, mount} from 'enzyme';

import {Tabs} from './Tabs';
import {Tab} from './Tab/Tab';
import {TabsType} from '../../lib';
import {ItemFirst, ItemSecond, ItemThird} from '../../mocks/components';

describe('Tabs component', () => {

  const tabProps = {
    first: {
      label: 'Tab 1',
      panel: <ItemFirst />
    },
    second: {
      label: 'Tab 2',
      panel: <ItemSecond />
    },
    third: {
      label: 'Tab 3',
      panel: <ItemThird />
    }
  };

  const children = [
    <Tab {...tabProps.first} key={0} />,
    <Tab {...tabProps.second} key={1} />,
    <Tab {...tabProps.third} key={2} />
  ];

  const wrapper = mount(
    <Tabs>
      {children}
    </Tabs>
  );

  it('render correct labels count', () => {
    expect(wrapper.find('ul').children().length).toBe(children.length);
  });

  it('firstly render correct panel if there is no defaultTabId', () => {
    expect(wrapper.find('.Tabs__panel').contains(children[0].props.panel)).toBe(true);
  });

  it('render correct tabs with passed type of tabs prop', () => {
    expect(wrapper.find('.nav').hasClass(`${TabsType.TABS}`)).toBe(true);
    expect(wrapper.find('.nav').hasClass(`${TabsType.PILLS}`)).toBe(false);
    wrapper.setProps({type: TabsType.PILLS});
    expect(wrapper.find('.nav').hasClass(`${TabsType.TABS}`)).toBe(false);
    expect(wrapper.find('.nav').hasClass(`${TabsType.PILLS}`)).toBe(true);
  });

});
