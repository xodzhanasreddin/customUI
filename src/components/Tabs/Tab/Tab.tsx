import React from 'react';

import {IconName} from '../../../lib';

interface ITabProps {
  label: string;
  panel: JSX.Element;
  icon?: IconName;
  withTitle?: boolean;
}

const Tab: React.SFC<ITabProps> = ({label, panel, withTitle}) => (
  <div className={'Tabs__panel'}>
    {withTitle && <h3>{label}</h3>}
    {panel}
  </div>
);

export {Tab, ITabProps};
