/* global console */
import * as actionTypes from './actionTypes';
import database from '../firebase';

const path = '/photos';

export const updatePhoto = (key, updatedPhoto) => {
  return (dispatch, getState) => {
    const { auth } = getState();
    database.ref(`users/${auth.user.uid}/${path}/${key}`)
      .update(updatedPhoto)
      .then(() => {
        dispatch({
          type: actionTypes.UPDATE_PHOTO,
          key,
          updatedPhoto,
        });
      })
      .catch(err => console.error(err));
  }
};

export const deletePhoto = (key) => {
  return (dispatch, getState) => {
    const { auth } = getState();
    database.ref(`users/${auth.user.uid}/${path}/${key}`)
      .remove()
      .then(() => {
        dispatch({
          type: actionTypes.DELETE_PHOTO,
          key,
        });
      })
      .catch(err => console.error(err));
  }
};

export const addPhoto = (photo) => {
  return (dispatch, getState) => {
    const { auth } = getState();
    database.ref(`users/${auth.user.uid}/${path}`)
      .push(photo)
      .then(() => {
        dispatch({
          type: actionTypes.ADD_PHOTO,
          photo,
        });
      })
      .then(() => {
        dispatch(loadPhotos());
      })
      .catch(err => console.error(err));
  }
};

export const loadPhotos = () => {
  return (dispatch, getState) => {
    const { auth } = getState();
    database.ref(`users/${auth.user.uid}/${path}`)
      .once('value')
      .then(snapshot => {
        const photos = snapshot.val() || {};
        dispatch({
          type: actionTypes.LOAD_PHOTOS,
          photos
        });
      })
      .catch(err => console.error(err));
  }
};