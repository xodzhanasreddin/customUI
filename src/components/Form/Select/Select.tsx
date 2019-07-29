import React from 'react';
import classNames from 'classnames';
import {IOptionProps} from './Option/Option';

interface ISelectProps extends React.HTMLAttributes<HTMLSelectElement> {
  options: React.ReactElement<IOptionProps> | Array<React.ReactElement<IOptionProps>>;
  withSearch?: boolean;
  handleChange: (value: string) => void;
}

class Select extends React.Component<ISelectProps, {}> {

  public componentDidMount() {
    $('.selectpicker').selectpicker();
  }

  public render() {
    const {
      options,
      withSearch = false,
      value,
      className,
      disabled,
      ...attrs
    } = this.props;

    const wrapperClasses = classNames(
      'form-group',
      'Select',
      disabled && 'disabled',
      className
    );

    const selectClasses = classNames(
      'selectpicker'
    );

    return (
      <div className={wrapperClasses}>
        <select
          className={selectClasses}
          data-style={''}
          data-width={'auto'}
          data-live-search={withSearch}
          onChange={this.handleChange}
          disabled={disabled}
          value={value}
          {...attrs}
        >
          {options}
        </select>
      </div>
    );
  }

  private handleChange = (e: React.MouseEvent<HTMLSelectElement>) => {
    const target = e.target as HTMLSelectElement;
    const value = target.value;
    console.log(value);
    this.props.handleChange(value);
  }
}

export {Select, ISelectProps};
