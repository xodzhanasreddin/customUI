import React from 'react';
import { IconName, ButtonIntent } from '../../lib';
interface IButtonProps extends React.HTMLProps<HTMLButtonElement & HTMLAnchorElement> {
    intent?: ButtonIntent;
    icon?: IconName;
    focused?: boolean;
    hovered?: boolean;
    iconAppend?: boolean;
    large?: boolean;
    type?: 'submit' | 'reset' | 'button';
}
declare const Button: React.SFC<IButtonProps>;
export { Button, IButtonProps };
