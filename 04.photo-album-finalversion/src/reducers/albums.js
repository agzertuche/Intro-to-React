import * as actionTypes from '../actions/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SHOW_ALL_ALBUMS:
      console.log(actionTypes.SHOW_ALL_ALBUMS);
      return state;
    case actionTypes.VIEW_ALBUM:
      console.log(actionTypes.VIEW_ALBUM);
      return state;
    case actionTypes.UPDATE_ALBUM:
      console.log(actionTypes.UPDATE_ALBUM);
      return state;
    case actionTypes.DELETE_ALBUM:
      console.log(actionTypes.DELETE_ALBUM);
      let {[action.key]: deleted, ...albums} = state;
      return albums;
    case actionTypes.ADD_ALBUM:
      console.log(actionTypes.ADD_ALBUM);
      return {
        ...state,
        [action.key]: action.album
      };
    default:
      return state;
  }
}