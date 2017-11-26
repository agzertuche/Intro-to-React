/* global describe, it, expect, beforeEach */
import { default as albumsReducer } from './albums';
import { default as photosReducer } from './photos';
import * as actionTypes from '../actions/actionTypes';

let key = '';
beforeEach(() => {
  key = `album-${Date.now()}`;
});

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

describe('Reducers', () => {

  describe('AlbumReducer', () => {
    it('should return the initial state of the Albums', () => {
      expect(albumsReducer({}, {})).toEqual({});
    });

    it('should handle ADD_ALBUM', () => {
      const action = {
        type: actionTypes.ADD_ALBUM,
        album,
        key
      }
      const resultEmptyState = albumsReducer({}, action);

      expect(resultEmptyState).toEqual({
        [key]: album
      })

      const initialState = {
        [key]: album
      }

      const result = albumsReducer(initialState, action);

      expect(result).toEqual({
        [key]: album,
        ...initialState
      })
    });

    it('should handle DELETE_ALBUM', () => {      
      const action = {
        type: actionTypes.DELETE_ALBUM,
        key
      }
      
      const initialState = {
        [key]: album
      }

      const result = albumsReducer(initialState, action);

      expect(result).toEqual({})
    });

    it('should handle UPDATE_ALBUM', () => {   
      const updatedAlbum = {
        ...album,
        name: 'Album updated',
      }

      const action = {
        type: actionTypes.UPDATE_ALBUM,
        updatedAlbum,
        key
      }
      
      const initialState = {
        [key]: album
      }      

      const result = albumsReducer(initialState, action);

      expect(result).toEqual({
        [key]: updatedAlbum
      });
      expect(result[key].name).toEqual('Album updated');
    });
  });

  describe('PhotoReducer', () => {
    it('should return the initial state of the Photos', () => {
      expect(photosReducer({}, {})).toEqual({});
    });

    it('should handle ADD_PHOTO', () => {
      const action = {
        type: actionTypes.ADD_PHOTO,
        photo,
        key
      }
      const resultEmptyState = photosReducer({}, action);

      expect(resultEmptyState).toEqual({
        [key]: photo
      })

      const initialState = {
        [key]: photo
      }

      const result = photosReducer(initialState, action);

      expect(result).toEqual({
        [key]: photo,
        ...initialState
      })
    });

    it('should handle DELETE_PHOTO', () => {      
      const action = {
        type: actionTypes.DELETE_PHOTO,
        key
      }
      
      const initialState = {
        [key]: photo
      }

      const result = photosReducer(initialState, action);

      expect(result).toEqual({})
    });

    it('should handle UPDATE_PHOTO', () => {   
      const updatedPhoto = {
        ...photo,
        title: 'Photo updated',
      }

      const action = {
        type: actionTypes.UPDATE_PHOTO,
        updatedPhoto,
        key
      }
      
      const initialState = {
        [key]: photo
      }      

      const result = photosReducer(initialState, action);

      expect(result).toEqual({
        [key]: updatedPhoto
      });
      expect(result[key].title).toEqual('Photo updated');
    });
  });

});