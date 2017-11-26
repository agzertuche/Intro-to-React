import * as actionTypes from './actionTypes';

export const updatePhoto = (key, updatedPhoto) => ({
  type: actionTypes.UPDATE_PHOTO,
  key,
  updatedPhoto,
});

export const deletePhoto = (key) => ({
  type: actionTypes.DELETE_PHOTO,
  key,
});

export const addPhoto = (photo) => {
  const key = `photo-${Date.now()}`;
  return {
    type: actionTypes.ADD_PHOTO,
    photo,
    key
  }
};