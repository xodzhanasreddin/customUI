import React from 'react';
import { TabsType } from '../../lib';
interface ITabsProps {
    defaultTabId?: number;
    type?: TabsType;
    large?: boolean;
}
interface ITabsState {
    selectedTabId: number;
}
declare class Tabs extends React.Component<ITabsProps, ITabsState> {
    constructor(props: ITabsProps);
    render(): JSX.Element;
    private renderLabels;
    private renderTab;
    private onTabClick;
}
export { Tabs, ITabsProps };
