import * as actionTypes from './actionTypes';

export const showAllAlbums = () => {
  return {
    type: actionTypes.SHOW_ALL_ALBUMS,
  }
};

export const viewAlbum = (key) => {
  return {
    type: actionTypes.VIEW_ALBUM,
    key,
  }
};

export const updateAlbum = (key, updates) => {
  return {
    type: actionTypes.UPDATE_ALBUM,
    key,
    updates,
  }
};

export const deleteAlbum = (key) => {
  return {
    type: actionTypes.DELETE_ALBUM,
    key,
  }
};

export const addAlbum = (album) => {
  return {
    type: actionTypes.ADD_ALBUM,
    album
  }
};