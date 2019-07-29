import React from 'react';
import { IOptionProps } from './Option/Option';
interface ISelectProps extends React.HTMLAttributes<HTMLSelectElement> {
    options: React.ReactElement<IOptionProps> | Array<React.ReactElement<IOptionProps>>;
    withSearch?: boolean;
    handleChange: (value: string) => void;
}
declare class Select extends React.Component<ISelectProps, {}> {
    componentDidMount(): void;
    render(): JSX.Element;
    private handleChange;
}
export { Select, ISelectProps };
