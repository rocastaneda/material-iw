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

export const getItem = (list, item) => findWhere(list, item);

export const indexOfItem = (list, item) => indexOf(list, item);

export const closeModal = () => {
  modalStore.dispatch({ type: SHOW_MODAL, show: false });
};

export const warningMessage = (title, message) => {
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

export const questionMessage = (title, message, acceptClick) => {
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

export const makeRequest = async (baseURL, service, request) => {
  loadingStore.dispatch({ type: SET_LOADING, isLoading: true });

  try {
    const res = await ClientHttpRequest({
      baseURL,
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
