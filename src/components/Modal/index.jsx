// Dependencies
import React from 'react';
import { Modal } from 'react-bootstrap';

// Components
import { Button, ButtonToolbar } from '../Button';

// Modal Context
import { useModal } from '../../context/ModalContext';

// Utils
import Utils from '../../utils/Utils';

// Styles
import './modal.styles.pcss';

export const ModalMessage = () => {
  const { modalState } = useModal();
  const { show, content } = modalState;

  const customOptions = () => {
    if (content.footer) {
      return (
        <ButtonToolbar>
          {content.footer.map(option => (
            <React.Fragment key={option.label}>
              <Button
                id={option.id}
                name={option.name}
                variant={option.variant}
                onClick={option.onClick}
                size={option.size}
                label={option.label}
                type="button"
              />
              &emsp;
            </React.Fragment>
          ))}
        </ButtonToolbar>
      );
    }
    return (
      <Button
        id="close-modal-button"
        name="close-modal-button"
        variant="primary"
        onClick={() => Utils.closeModal()}
        label="Cerrar"
        type="button"
      />
    );
  };

  return (
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>{content.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{content.body}</Modal.Body>
      <Modal.Footer>{customOptions()}</Modal.Footer>
    </Modal>
  );
};
