import * as albumActions from './albumActions';
import * as photoActions from './photoActions';
import * as actionTypes from './actionTypes';

const album = {
  name: 'Album name',
  description: 'This is the album description',
  tags: ['tag1', 'tag2'],
  photosIds: ['photo1', 'photo2', 'photo3'],
}

const photo = {
  title: 'Photo name',
  description: 'Photo description',
  url: 'https://source.unsplash.com/1600x900/?happy',
}

describe('Actions Creators', () => {

  describe('Albums', () => {
    it('should create an action to add an Album', () => {
      const key = `album-${Date.now()}`;
      const expectedAction = {
        type: actionTypes.ADD_ALBUM,
        album,
        key
      }

      expect(albumActions.addAlbum(album)).toEqual(expectedAction);
    });

    it('should create an action to update an Album', () => {
      const key = `album-${Date.now()}`;
      const updatedAlbum = { ...album };
      const expectedAction = {
        type: actionTypes.UPDATE_ALBUM,
        key,
        updatedAlbum,
      }

      expect(albumActions.updateAlbum(key, album)).toEqual(expectedAction);
    });

    it('should create an action to delete an Album', () => {
      const key = `album-${Date.now()}`;
      const expectedAction = {
        type: actionTypes.DELETE_ALBUM,
        key,
      }

      expect(albumActions.deleteAlbum(key)).toEqual(expectedAction);
    });
  });

  describe('Photos', () => {
    it('should create an action to add a Photo', () => {
      const key = `photo-${Date.now()}`;
      const expectedAction = {
        type: actionTypes.ADD_PHOTO,
        photo,
        key
      }

      expect(photoActions.addPhoto(photo)).toEqual(expectedAction);
    });

    it('should create an action to update an Photo', () => {
      const key = `photo-${Date.now()}`;
      const updatedPhoto = { ...photo };
      const expectedAction = {
        type: actionTypes.UPDATE_PHOTO,
        key,
        updatedPhoto,
      }

      expect(photoActions.updatePhoto(key, photo)).toEqual(expectedAction);
    });

    it('should create an action to delete an Photo', () => {
      const key = `photo-${Date.now()}`;
      const expectedAction = {
        type: actionTypes.DELETE_PHOTO,
        key,
      }

      expect(photoActions.deletePhoto(key)).toEqual(expectedAction);
    });
  });
});