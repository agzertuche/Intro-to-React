/* global describe, it, expect, shallow */
import React from 'react';
import { AlbumList } from './AlbumList';
import Album from './Album';

const setup = () => {
  const props = {
    albums: {
      album1: {
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
      album2: {
        "name": "Wrapsafe",
        "description": "Praesent blandit lacinia erat.",
        "tags": [
          "Dryden",
          "Weeping Birch",
          "International"
        ],
        "photosIds": [
          "photo3",
          "photo4",
        ]
      }, 
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
    }
  }

  const component = shallow(
    <AlbumList 
      albums={props.albums} 
      photos={props.photos} 
      deleteAlbum={() => {}}
    />
  ); 

  return {
    component,
    props,
  }
}

describe('AlbumList', () => {
  const { component, props } = setup();

  it('should render all albums', () => {
    expect(component.find(Album).length)
      .toEqual(Object.keys(props.albums).length);
  });
});