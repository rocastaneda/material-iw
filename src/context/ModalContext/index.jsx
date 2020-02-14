// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

import store from '../../store/modalStore';

const StateContext = React.createContext();
const ModalDispatchContext = React.createContext();

export const SHOW_MODAL = 'SHOW_MODAL';
export const SET_CONTENT = 'SET_CONTENT';

function modalReducer(state, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, show: action.show };
    case SET_CONTENT:
      return { ...state, content: action.content };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export const ModalProvider = ({ children, initialState }) => {
  const [state, dispatch] = React.useReducer(modalReducer, initialState);
  const stateRef = React.useRef(initialState);

  React.useEffect(() => {
    stateRef.current = state;
    store.__onStateUpdated();
  }, [state]);

  if (!store.isReady) {
    store.init({
      dispatch: params => dispatch(params),
      getState: () => ({ ...stateRef.current }),
    });
  }

  return (
    <StateContext.Provider value={state}>
      <ModalDispatchContext.Provider value={dispatch}>
        {typeof children === 'function'
          ? children({ state, dispatch })
          : children}
      </ModalDispatchContext.Provider>
    </StateContext.Provider>
  );
};

ModalProvider.defaultProps = {
  initialState: {
    show: false,
    content: {},
  },
};

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
  initialState: PropTypes.shape({
    show: PropTypes.bool,
    content: PropTypes.object,
  }),
};

export const useModalState = () => {
  const context = React.useContext(StateContext);
  if (!context) {
    throw new Error('useModalState must be used within a ModalProvider');
  }

  return context;
};

export const useModalDispatch = () => {
  const context = React.useContext(ModalDispatchContext);
  if (!context) {
    throw new Error('useModalDispatch must be used within a ModalProvider');
  }

  return context;
};

export const useModal = () => ({
  modalState: useModalState(),
  modalDispatch: useModalDispatch(),
});
