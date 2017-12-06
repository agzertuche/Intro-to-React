import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isAuthenticated: false,
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_IN: {
      return {
        isAuthenticated: true,
        user: {
          uid: action.user.uid,
          displayName: action.user.displayName,
          photoURL: action.user.photoURL,
        }
      };
    }
    case actionTypes.SIGN_OUT: {
      return initialState;
    }
    default:
      return state;
  }
}