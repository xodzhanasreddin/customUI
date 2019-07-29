import React from 'react';
import { ICommonInputProps, TextInputType } from '../../../lib';
interface ITextInputProps extends ICommonInputProps {
    type?: TextInputType;
    hasError?: boolean;
    helpMessage?: string;
}
declare const TextInput: React.SFC<ITextInputProps>;
export { TextInput, ITextInputProps };
