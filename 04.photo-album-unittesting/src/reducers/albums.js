import * as actionTypes from '../actions/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_ALBUM: {
      // return Object.assign({}, state, {
      //   [action.key]: action.updatedAlbum
      // });
      return {
        ...state,
        [action.key]: action.updatedAlbum
      };
    }
    case actionTypes.DELETE_ALBUM: {
      let {[action.key]: albumDeleted, ...restOfAlbums} = state;
      return restOfAlbums;
    }
    case actionTypes.ADD_ALBUM: {
      return {
        [action.key]: action.album,
        ...state
      };
    }
    default:
      return state;
  }
}