/* global describe, it, expect, shallow, jest */
import React from 'react';
import { AlbumForm } from './AlbumForm';

const setup = (formType) => {
  const props = {
    formType,
    key: 'album1',
    album: {
      "name": "Gembucket",
      "description": "Duis consequat dui nec nisi volutpat eleifend.",
      "tags": [
        "Warrior",
        "Kingsford",
      ],
      "photosIds": [
        "photo1",
        "photo2",
      ]
    },
    photos: {
      photo1: {
        "title": "Fright Night Part II",
        "description": "Nunc rhoncus dui vel sem.",
        "url": "https://source.unsplash.com/1600x900/?happy"
      },
      photo2: {
        "title": "The Detective 2",
        "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
        "url": "https://source.unsplash.com/1600x900/?friends"
      },
      photo3: {
        "title": "Interpreter, The",
        "description": "Morbi ut odio.",
        "url": "https://source.unsplash.com/1600x900/?nature"
      },
      photo4: {
        "title": "Hot Rod",
        "description": "In hac habitasse platea dictumst.",
        "url": "https://source.unsplash.com/1600x900/?landscape"
      },
    },
    updateAlbum: jest.fn(),
    createAlbum: jest.fn(),
  }

  const component = shallow(<AlbumForm {...props} />); 

  return {
    component,
    props,
  }
}

describe('AlbumForm', () => {

  describe('New Form', () => {
    const { component } = setup('New');
    it('should render without crash', () => {
      expect(component);
    });
  });
});