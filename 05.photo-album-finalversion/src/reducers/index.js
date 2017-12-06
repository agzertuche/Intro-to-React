import { combineReducers } from 'redux';
import albumReducer from './albumReducer';
import photoReducer from './photoReducer';
import authReducer from './authReducer';
import * as actionTypes from '../actions/actionTypes';

const appReducer = combineReducers({
  albums: albumReducer,
  photos: photoReducer,
  auth: authReducer,
});

const rootReducer = (state, action) => {
  if (action.type === actionTypes.SIGN_OUT) {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer;