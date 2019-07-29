import React from 'react';
import classNames from 'classnames';

import {IconName, ButtonIntent} from '../../lib';
import {Icon} from '../Icon/Icon';

interface IButtonProps extends React.HTMLProps<HTMLButtonElement & HTMLAnchorElement> {
  intent?: ButtonIntent;
  icon?: IconName;
  focused?: boolean;
  hovered?: boolean;
  iconAppend?: boolean;
  large?: boolean;
  type?: 'submit' | 'reset' | 'button';
}

const Button: React.SFC<IButtonProps> = (props) => {
  const {
    children = 'Default button',
    intent,
    focused,
    hovered,
    icon,
    iconAppend = false,
    large = false,
    className,
    type = 'button',
    ...attrs
  } = props;

  const classes = classNames(
    'Button',
    'btn',
    large && 'btn-lg',
    intent,
    className,
    focused && 'focus',
    hovered && 'hover',
    attrs.disabled && 'disabled',
    icon && !iconAppend && 'btn-icon-prepend',
    icon && iconAppend && 'btn-icon-append'
  );

  const Tag = attrs.href ? 'a' : 'button';

  return (
    <Tag className={classes} type={type} {...attrs}>
      {icon && !iconAppend && (
        <span className={'btn-icon'}>
          <Icon iconName={icon} />
        </span>
      )}
      {children}
      {icon && iconAppend && (
        <span className={'btn-icon'}>
          <Icon iconName={icon} />
        </span>
      )}
    </Tag>
  );
};

export {Button, IButtonProps};
