import * as actionTypes from '../actions/actionTypes';

function test(state = [], action) {
  switch (action.type) {
    case actionTypes.SHOW_ALL_PHOTOS:
      console.log(actionTypes.SHOW_ALL_PHOTOS);
      return state;
    default:
      return state;
  }
}

export default test;