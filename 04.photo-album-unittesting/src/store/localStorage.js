/* global localStorage */
import * as api from '../api';

export const loadState = () => {
  // If there is no data in local storage, get data from api
  const localAlbums = localStorage.getItem('albums');
  const localPhotos = localStorage.getItem('photos');

  if (localAlbums && localPhotos) {
    return {
      albums: JSON.parse(localAlbums),
      photos: JSON.parse(localPhotos)
    }
  }

  return {
    albums: api.getAlbums(),
    photos: api.getPhotos()
  }
};

export const saveState = (itemName, state) => {
  localStorage.setItem(
    itemName, JSON.stringify(state)
  );
};