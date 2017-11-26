/* global window */
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import { loadState, saveState } from './localStorage';

const configureStore = () => {
  const persistedState = loadState();
  let middleware = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  const store = createStore(
    rootReducer,
    persistedState,
    middleware    
  );

  store.subscribe(() => {
    const { albums, photos } = store.getState();
    saveState('albums', albums);
    saveState('photos', photos);
  });

  return store;
}

export default configureStore;