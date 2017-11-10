import { createStore } from 'redux';
import rootReducer from '../reducers';
import * as api from '../api';

const initialState = {
  albums: api.getAlbums(),
  photos: api.getPhotos(),
}

const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;