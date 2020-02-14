// Dependencies
import React from 'react';
import { Spinner } from 'react-bootstrap';

// Loading Context
import { useLoading } from '../../context/LoadingContext';

// Styles
import './loading.styles.pcss';

export const Loading = () => {
  const { loadingState } = useLoading();

  if (loadingState.isLoading) {
    return (
      <div className="loader">
        <Spinner animation="border" role="status" size="lg" />
      </div>
    );
  }
  return null;
};
