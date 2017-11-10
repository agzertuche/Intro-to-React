import { combineReducers } from 'redux';
import albums from './albums';
import photos from './photos';

const rootReducer = combineReducers({
  albums,
  photos,
});

export default rootReducer;