import { combineReducers } from 'redux';
import albumReducer from './albumReducer';
import photoReducer from './photoReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  albums: albumReducer,
  photos: photoReducer,
  user: authReducer,
});

export default rootReducer;