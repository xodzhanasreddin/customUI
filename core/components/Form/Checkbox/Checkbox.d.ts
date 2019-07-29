import * as React from 'react';
import { ICommonInputProps, CheckboxType } from '../../../lib';
interface ICheckboxProps extends ICommonInputProps {
    type?: CheckboxType;
}
declare const Checkbox: React.SFC<ICheckboxProps>;
export { Checkbox, ICheckboxProps };
