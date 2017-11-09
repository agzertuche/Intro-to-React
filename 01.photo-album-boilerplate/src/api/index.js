import { default as sampleAlbums } from './sampleAlbums';
import { default as samplePhotos } from './samplePhotos';

class api {
  getAlbums = () => {
    return sampleAlbums;
  }

  getPhotos = () => {
    return samplePhotos;
  }
}

export default api;