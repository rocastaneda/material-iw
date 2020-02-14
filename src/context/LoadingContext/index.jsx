// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

import store from '../../store/loadingStore';

const StateContext = React.createContext();
const LoadingDispatchContext = React.createContext();

export const SET_LOADING = 'SET_LOADING';

function loadingReducer(state, action) {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: action.isLoading };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export function LoadingProvider({ children, initialState }) {
  const [state, dispatch] = React.useReducer(loadingReducer, initialState);
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
      <LoadingDispatchContext.Provider value={dispatch}>
        {typeof children === 'function'
          ? children({ state, dispatch })
          : children}
      </LoadingDispatchContext.Provider>
    </StateContext.Provider>
  );
}

LoadingProvider.defaultProps = {
  initialState: { isLoading: false },
};

LoadingProvider.propTypes = {
  children: PropTypes.node.isRequired,
  initialState: PropTypes.shape({
    isLoading: PropTypes.bool,
  }),
};

export const useLoadingState = () => {
  const context = React.useContext(StateContext);
  if (!context) {
    throw new Error('useLoadingState must be used within a LoadingProvider');
  }

  return context;
};

export const useLoadingDispatch = () => {
  const context = React.useContext(LoadingDispatchContext);
  if (!context) {
    throw new Error('useLoadingDispatch must be used within a LoadingProvider');
  }

  return context;
};

export const useLoading = () => ({
  loadingState: useLoadingState(),
  loadingDispatch: useLoadingDispatch(),
});
