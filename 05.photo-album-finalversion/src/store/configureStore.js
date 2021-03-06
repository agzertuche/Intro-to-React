/* global window */
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

const configureStore = (initialState = {}) => {

  let middleware = applyMiddleware(thunk);

  const devToolsExtension = window.devToolsExtension;
  if (typeof devToolsExtension === 'function') {
    middleware = compose(middleware, devToolsExtension());
  }

  const store = createStore(
    rootReducer,
    initialState,
    middleware,
  );

  return store;
}

export default configureStore;