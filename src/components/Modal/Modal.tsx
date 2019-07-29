import React from 'react';
import classNames from 'classnames';
import {ButtonIntent} from '../../lib';

interface IModalProps extends React.HTMLProps<HTMLDivElement> {
  id: string;
  buttonText: string;
  buttonIntent?: ButtonIntent;
  buttonLarge?: boolean;
  modalTitle?: string;
}

const Modal: React.SFC<IModalProps> = (props) => {
  const {
    className,
    id,
    buttonText,
    buttonIntent = ButtonIntent.SECONDARY,
    buttonLarge = true,
    modalTitle,
    children,
    ...attrs
  } = props;

  const classes = classNames(
    'Modal',
    className
  );

  const modalButtonClasses = classNames(
    'Modal-button',
    'Button',
    'btn',
    buttonIntent,
    buttonLarge && 'btn-lg'
  );

  const closeButtonClasses = classNames(
    'Modal-button__close',
    'Button',
    'btn',
    buttonIntent
  );

  const modalId = `Modal-${id}`;
  const modalLabel = `ModalLabel-${id}`;

  return (
    <div className={classes} {...attrs}>
      <button
        type={'button'}
        className={modalButtonClasses}
        data-toggle={'modal'}
        data-target={`#${modalId}`}
      >
        {buttonText}
      </button>

      <div className={'modal fade'} id={modalId} tabIndex={-1} role={'dialog'} aria-labelledby={modalLabel}>
        <div className={'modal-dialog'} role={'document'}>
          <div className={'modal-content'}>
            <div className={'modal-header'}>
              <button type={'button'} className={'close'} data-dismiss={'modal'} aria-label={'Close'}>
                <span aria-hidden={'true'}>&times;</span>
              </button>
              {modalTitle && (
                <h4 className={'modal-title'} id={modalLabel}>
                  {modalTitle}
                </h4>
              )}
            </div>
            <div className={'modal-body'}>
              {children}
            </div>
            <div className={'modal-footer'}>
              <button type={'button'} className={closeButtonClasses} data-dismiss={'modal'}>
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export {Modal, IModalProps};
