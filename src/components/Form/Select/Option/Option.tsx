import React from 'react';

interface IOptionProps extends React.HTMLAttributes<HTMLOptionElement> {}

const Option: React.SFC<IOptionProps> = (props) => {
  const {value, ...attrs} = props;

  return (
    <option value={value} {...attrs}>{value}</option>
  );
};

export {Option, IOptionProps};
