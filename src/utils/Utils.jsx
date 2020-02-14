// Dependencies
import React from 'react';
import { findWhere, indexOf } from 'underscore';

// Api
import ClientHttpRequest from './api/api.client';

// Loading Store
import loadingStore from '../store/loadingStore';
import { SET_LOADING } from '../context/LoadingContext';

// Modal Store
import modalStore from '../store/modalStore';
import { SHOW_MODAL, SET_CONTENT } from '../context/ModalContext';

// Static
import QuestionIcon from '../static/svg/ico-pregunta.svg';
import WarningIcon from '../static/svg/ico-atencion.svg';

// Labels
import Labels from './Labels';

const getItem = (list, item) => findWhere(list, item);

const indexOfItem = (list, item) => indexOf(list, item);

const closeModal = () => {
  modalStore.dispatch({ type: SHOW_MODAL, show: false });
};

const warningMessage = (title, message) => {
  const modalObj = {
    title: title || '¡Atención!',
    body: (
      <div>
        <WarningIcon />
        {typeof message === 'string' ? <p>{message}</p> : { message }}
      </div>
    ),
  };

  modalStore.dispatch({ type: SET_CONTENT, content: modalObj });
  modalStore.dispatch({ type: SHOW_MODAL, show: true });
};

const questionMessage = (title, message, acceptClick) => {
  const modalObj = {
    title: title || '¿?',
    body: (
      <div>
        <QuestionIcon />
        {typeof message === 'string' ? <p>{message}</p> : { message }}
      </div>
    ),
    footer: [
      {
        id: 'cancel-modal-button',
        name: 'cancel-modal-button',
        label: Labels.Modal.Cancel,
        variant: 'default',
        onClick: closeModal,
      },
      {
        id: 'accept-modal-button',
        name: 'accept-modal-button',
        label: Labels.Modal.Accept,
        variant: 'primary',
        onClick: acceptClick,
      },
    ],
  };

  modalStore.dispatch({ type: SET_CONTENT, content: modalObj });
  modalStore.dispatch({ type: SHOW_MODAL, show: true });
};

const makeRequest = async (service, request) => {
  loadingStore.dispatch({ type: SET_LOADING, isLoading: true });

  try {
    const res = await ClientHttpRequest({
      service,
      method: 'POST',
      data: request,
    });

    loadingStore.dispatch({ type: SET_LOADING, isLoading: false });
    return res;
  } catch (error) {
    const { data } = error;

    warningMessage(
      null,
      data && data.descripcionError ? data.descripcionError : ''
    );
    loadingStore.dispatch({ type: SET_LOADING, isLoading: false });
    return error;
  }
};

export default {
  getItem,
  indexOfItem,
  closeModal,
  warningMessage,
  questionMessage,
  makeRequest,
};
