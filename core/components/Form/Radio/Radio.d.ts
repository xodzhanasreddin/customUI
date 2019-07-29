import * as React from 'react';
import { RadioType, ICommonInputProps } from '../../../lib';
interface IRadioProps extends ICommonInputProps {
    type?: RadioType;
}
declare const Radio: React.SFC<IRadioProps>;
export { Radio, IRadioProps };
