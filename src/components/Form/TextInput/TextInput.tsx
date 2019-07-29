import React from 'react';
import classNames from 'classnames';
import {ICommonInputProps, TextInputType} from '../../../lib';

interface ITextInputProps extends ICommonInputProps {
  type?: TextInputType;
  hasError?: boolean;
  helpMessage?: string;
}

const TextInput: React.SFC<ITextInputProps> = (props) => {

  const {
    id,
    type = TextInputType.TEXT,
    labelText,
    className,
    hasError,
    helpMessage,
    ...attrs
  } = props;

  const classes = classNames(
    'form-group',
    'TextInput',
    hasError && 'has-error',
    className
  );

  return (
    <div className={classes}>
      {labelText && (
        <label htmlFor={id}>{labelText}</label>
      )}
      <input
        id={id}
        type={type}
        className={'form-control form-control--custom'}
        {...attrs}
      />
      {helpMessage && (
        <span className="help-block">{helpMessage}</span>
      )}
    </div>
  );
};

export {TextInput, ITextInputProps};
