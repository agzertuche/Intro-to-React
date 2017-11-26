import * as actionTypes from './actionTypes';
import database from '../firebase';

export const updateAlbum = (key, updatedAlbum) => ({
  type: actionTypes.UPDATE_ALBUM,
  key,
  updatedAlbum,
});

export const deleteAlbum = (key) => ({
  type: actionTypes.DELETE_ALBUM,
  key,
});

const addAlbum = (album) => {
  const key = `album-${Date.now()}`;
  return {
    type: actionTypes.ADD_ALBUM,
    album,
    key
  }
};

export const addAlbumFirebase = (album) => {
  return dispatch => {
    const albumRef = database.ref('/albums');
    albumRef.push({
      album
    })
    .then(() => {
      dispatch(addAlbum(album));
    })
  }
}