import React from 'react';
import classNames from 'classnames';

import {ITabProps} from './Tab/Tab';
import {TabLabel} from './TabLabel/TabLabel';
import {TabsType} from '../../lib';

interface ITabsProps {
  defaultTabId?: number;
  type?: TabsType;
  large?: boolean;
}

interface ITabsState {
  selectedTabId: number;
}

class Tabs extends React.Component<ITabsProps, ITabsState> {

  public constructor(props: ITabsProps) {
    super(props);
    const {defaultTabId} = props;

    this.state = {
      selectedTabId: defaultTabId ? defaultTabId : 0
    };
  }

  public render(): JSX.Element {
    const {type = TabsType.TABS, large} = this.props;

    const classes = classNames(
      'nav',
      type,
      large && 'nav-tabs-lg'
    );

    const tab = this.renderTab();
    const labels = this.renderLabels();

    return (
      <div className={'Tabs'}>
        <ul className={classes} role={'tablist'}>
          {labels}
        </ul>
        {tab}
      </div>
    );
  }

  private renderLabels = () => {
    const {selectedTabId} = this.state;
    const {children} = this.props;

    return React.Children.map(children, (tab: React.ReactElement<ITabProps>, idx) => {
      if (!React.isValidElement(tab)) {
        return;
      }

      const {icon, label} = tab.props;

      return (
        <TabLabel
          id={idx}
          isActive={selectedTabId === idx}
          label={label}
          icon={icon}
          onTabClick={this.onTabClick}
        />
      );
    });
  }

  private renderTab = () => {
    const {selectedTabId} = this.state;
    const {children} = this.props;

    return React.Children.toArray(children).filter((tab: React.ReactElement<ITabProps>, idx) => {
      if (!React.isValidElement(tab)) {
        return;
      }

      return selectedTabId
        ? idx === selectedTabId && tab
        : idx === 0 && tab;
    });
  }

  private onTabClick = (id: number, e: React.MouseEvent<HTMLElement>) => {
    if (this.state.selectedTabId !== id) {
      this.setState({selectedTabId: id});
    }
  }

}

export {Tabs, ITabsProps};
