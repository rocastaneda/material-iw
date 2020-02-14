// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// User Reducer
import { ModalProvider } from './ModalContext';
import { LoadingProvider } from './LoadingContext';

export const GlobalState = ({ children }) => {
  return (
    <ModalProvider>
      <LoadingProvider>{children}</LoadingProvider>
    </ModalProvider>
  );
};

GlobalState.propTypes = {
  children: PropTypes.node.isRequired,
};
