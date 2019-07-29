import * as React from 'react';
import classNames from 'classnames';
import {ICommonInputProps, CheckboxType} from '../../../lib';

interface ICheckboxProps extends ICommonInputProps {
  type?: CheckboxType;
}

const Checkbox: React.SFC<ICheckboxProps> = (props) => {

  const {
    id,
    type = CheckboxType.CHECKBOX,
    labelText,
    className,
    checked,
    disabled,
    ...attrs
  } = props;

  const wrapperClasses = classNames(
    'Checkbox',
    (checked || attrs.defaultChecked) && 'checked',
    {disabled},
    className
  );

  const inputClasses = classNames(
    'Checkbox__input'
  );

  return (
    <label className={wrapperClasses} htmlFor={id}>
      <span className={inputClasses} />
      <input
        type={type}
        className={'visually-hidden'}
        id={id}
        checked={checked}
        disabled={disabled}
        {...attrs}
      />
      {labelText && (
        <p className={'Checkbox__label'}>{labelText}</p>
      )}
    </label>
  );
};

export {Checkbox, ICheckboxProps};
