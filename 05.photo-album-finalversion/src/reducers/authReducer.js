import * as actionTypes from '../actions/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SIGN_IN: {
      return {
        uid: action.user.uid,
        displayName: action.user.displayName,
        photoURL: action.user.photoURL,
      };
    }
    case actionTypes.SIGN_OUT: {
      return {
        undefined,
      };
    }
    default:
      return state;
  }
}