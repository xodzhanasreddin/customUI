import React from 'react';
import classNames from 'classnames';

import {Icon} from '../../Icon/Icon';
import {IconName} from '../../../lib';

interface ITabLabelProps {
  label: string;
  id: number;
  isActive: boolean;
  icon?: IconName;
  onTabClick: (id: number, e: React.MouseEvent<HTMLElement>) => void;
}

const TabLabel: React.SFC<ITabLabelProps> = (props) => {

  const {label, id, isActive, onTabClick, icon} = props;

  const handleClick = (e: React.MouseEvent<HTMLElement>) => onTabClick(id, e);

  const classes = classNames(
    isActive && 'active'
  );

  return (
    <li className={classes} onClick={handleClick}>
      <a role={'tab'} data-toggle={'tab'}>
        {icon && <Icon iconName={icon} className={'tab-icon'} />}
        {label}
      </a>
    </li>
  );
};

export {TabLabel, ITabLabelProps};
