import * as React from 'react';
import classNames from 'classnames';
import {Button, IButtonProps} from '../Button/Button';

interface IButtonGroupProps {
  large?: boolean;
  indented?: boolean;
  className?: string;
}

const ButtonGroup: React.SFC<IButtonGroupProps> = (props): JSX.Element => {
  const {children, indented = true, large = false, className} = props;

  const buttons: React.ReactNode = React.Children
    .toArray(children)
    .filter((button: React.ReactElement<IButtonProps>) => React.isValidElement(button) && button.type === Button)
    .map((button: React.ReactElement<IButtonProps>) => {
      return React.cloneElement<{}, IButtonProps>(button, {large});
    });

  const classes: string = classNames(
    indented ? 'buttons-group' : 'btn-group',
    className
  );
  const role: string = indented ? 'group' : '';

  return (
    <div className={classes} role={role}>
      {buttons}
    </div>
  );
};

export {ButtonGroup, IButtonGroupProps};
