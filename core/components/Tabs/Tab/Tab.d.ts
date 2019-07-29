import React from 'react';
import { IconName } from '../../../lib';
interface ITabProps {
    label: string;
    panel: JSX.Element;
    icon?: IconName;
    withTitle?: boolean;
}
declare const Tab: React.SFC<ITabProps>;
export { Tab, ITabProps };
