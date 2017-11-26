import * as actionTypes from '../actions/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_PHOTO: {
      // return Object.assign({}, state, {
      //   [action.key]: action.updatedPhoto
      // });
      return {
        ...state,
        [action.key]: action.updatedPhoto
      };
    }
    case actionTypes.DELETE_PHOTO: {
      let { [action.key]: photoDeleted, ...restOfPhotos } = state;
      
      return restOfPhotos;
    }
    case actionTypes.ADD_PHOTO: {
      return {
        [action.key]: action.photo,
        ...state
      };
    }
    default:
      return state;
  }
}