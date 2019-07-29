import * as React from 'react';
import classNames from 'classnames';
import {IconName, icons} from '../../lib';

interface IIconProps extends React.SVGAttributes<SVGElement> {
  iconName: IconName;
  className?: string;
}

const Icon: React.SFC<IIconProps> = (props) => {
  const {iconName, className, ...attrs} = props;

  const classes = classNames(
    'Icon',
    `Icon-${iconName}`,
    className
  );

  return (
    <svg className={classes} {...attrs}>
      <use xlinkHref={icons[iconName]} />
    </svg>
  );
};

export {Icon, IIconProps};
