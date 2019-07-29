import React from 'react';
import { IconName } from '../../../lib';
interface ITabLabelProps {
    label: string;
    id: number;
    isActive: boolean;
    icon?: IconName;
    onTabClick: (id: number, e: React.MouseEvent<HTMLElement>) => void;
}
declare const TabLabel: React.SFC<ITabLabelProps>;
export { TabLabel, ITabLabelProps };
