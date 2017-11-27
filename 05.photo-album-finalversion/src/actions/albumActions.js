
/* global console */
import * as actionTypes from './actionTypes';
import database from '../firebase';

const path = '/albums';

export const updateAlbum = (key, updatedAlbum) => {
  return (dispatch, getState) => {
    const { user } = getState();
    database.ref(`users/${user.uid}/${path}/${key}`)
      .update(updatedAlbum)
      .then(() => {
        dispatch({
          type: actionTypes.UPDATE_ALBUM,
          key,
          updatedAlbum,
        });
      })
      .catch(err => console.error(err));
  }
};

export const deleteAlbum = (key) => {
  return (dispatch, getState) => {
    const { user } = getState();
    database.ref(`users/${user.uid}/${path}/${key}`)
      .remove()
      .then(() => {
        dispatch({
          type: actionTypes.DELETE_ALBUM,
          key,
        });
      })
      .catch(err => console.error(err));
  }
};

export const addAlbum = (album) => {
  return (dispatch, getState) => {
    const { user } = getState();
    database.ref(`users/${user.uid}/${path}`)
      .push(album)
      .then(() => {
        dispatch({
          type: actionTypes.ADD_ALBUM,
          album,
        });
      })
      .catch(err => console.error(err));
  }
};

export const loadAlbums = () => {
  return (dispatch, getState) => {
    const { user } = getState();
    database.ref(`users/${user.uid}/${path}`)
      .once('value')
      .then(snapshot => {
        const albums = snapshot.val() || {};
        dispatch({
          type: actionTypes.LOAD_ALBUMS,
          albums
        });
      })
      .catch(err => console.error(err));
  }
};