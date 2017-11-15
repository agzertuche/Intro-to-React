import * as actionTypes from './actionTypes';

export const updatePhoto = (key, updatedPhoto) => {
  return {
    type: actionTypes.UPDATE_PHOTO,
    key,
    updatedPhoto,
  }
};

export const deletePhoto = (key) => {
  return {
    type: actionTypes.DELETE_PHOTO,
    key,
  }
};

export const addPhoto = (photo) => {
  const timestamp = Date.now();
  const key = `photo-${timestamp}`;
  return {
    type: actionTypes.ADD_PHOTO,
    photo,
    key
  }
};