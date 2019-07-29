import React from 'react';
import { ButtonIntent } from '../../lib';
interface IModalProps extends React.HTMLProps<HTMLDivElement> {
    id: string;
    buttonText: string;
    buttonIntent?: ButtonIntent;
    buttonLarge?: boolean;
    modalTitle?: string;
}
declare const Modal: React.SFC<IModalProps>;
export { Modal, IModalProps };
