import * as actionTypes from './actionTypes';

export const updateAlbum = (key, updatedAlbum) => {
  return {
    type: actionTypes.UPDATE_ALBUM,
    key,
    updatedAlbum,
  }
};

export const deleteAlbum = (key) => {
  return {
    type: actionTypes.DELETE_ALBUM,
    key,
  }
};

export const addAlbum = (album) => {
  const timestamp = Date.now();
  const key = `album-${timestamp}`;
  return {
    type: actionTypes.ADD_ALBUM,
    album,
    key
  }
};