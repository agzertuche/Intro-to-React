/* global console */
import * as actionTypes from './actionTypes';
import { firebaseAuth } from '../firebase';
import firebase from 'firebase';
import { albumActions } from '../actions';
import { photoActions } from '../actions';

const authenticate = (provider) => {
  return dispatch => {
    firebaseAuth.signInWithPopup(provider)
      .then(result => {
        dispatch({
          type: actionTypes.SIGN_IN,
          user: result.user,
        });
      })
      .then(() => {
        dispatch(albumActions.loadAlbums());
        dispatch(photoActions.loadPhotos());
      })
      .catch(err => console.error(err));
  }
};

export const signInWithFacebook = () => {
  return authenticate(new firebase.auth.FacebookAuthProvider());
};

export const signInWithGitHub = () => {
  return authenticate(new firebase.auth.GithubAuthProvider());
};

export const signOut = () => {
  return dispatch => {
    firebaseAuth.signOut()
      .then(() => {
        dispatch({
          type: actionTypes.SIGN_OUT,
        });
      })
      .catch(err => console.error(err));
  }
};