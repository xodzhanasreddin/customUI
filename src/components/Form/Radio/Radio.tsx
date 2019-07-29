import * as React from 'react';
import classNames from 'classnames';
import {RadioType, ICommonInputProps} from '../../../lib';

interface IRadioProps extends ICommonInputProps {
  type?: RadioType;
}

const Radio: React.SFC<IRadioProps> = (props) => {

  const {
    id,
    type = RadioType.RADIO,
    labelText,
    className,
    checked,
    disabled,
    ...attrs
  } = props;

  const wrapperClasses = classNames(
    'Radio',
    (checked || attrs.defaultChecked) && 'checked',
    {disabled},
    className
  );

  const inputClasses = classNames(
    'Radio__input'
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
        <p className={'Radio__label'}>{labelText}</p>
      )}
    </label>
  );
};

export {Radio, IRadioProps};
