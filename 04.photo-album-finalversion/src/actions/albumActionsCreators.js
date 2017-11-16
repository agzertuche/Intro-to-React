import * as actionTypes from './actionTypes';

export const updateAlbum = (key, updatedAlbum) => ({
  type: actionTypes.UPDATE_ALBUM,
  key,
  updatedAlbum,
});

export const deleteAlbum = (key) => ({
  type: actionTypes.DELETE_ALBUM,
  key,
});

export const addAlbum = (album) => {
  const key = `album-${Date.now()}`;
  return {
    type: actionTypes.ADD_ALBUM,
    album,
    key
  }
};