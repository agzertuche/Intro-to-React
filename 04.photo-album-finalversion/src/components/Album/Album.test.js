/* global describe, it, expect, shallow */
import React from 'react';
import Album from './Album';

const setup = () => {
  const props = {
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
    children: 'Text child',
    albumPhotos: [
      {
        "title": "Fright Night Part II",
        "description": "Nunc rhoncus dui vel sem.",
        "url": "https://source.unsplash.com/1600x900/?happy"
      },
      {
        "title": "The Detective 2",
        "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
        "url": "https://source.unsplash.com/1600x900/?friends"
      },
    ]
  }

  const component = shallow(
    <Album album={props.album} albumPhotos={props.albumPhotos}>
      { props.children }
    </Album>
  ); 

  return {
    component,
    props,
  }
}

describe('Album', () => {
  const { component, props } = setup();

  it('renders all properties', () => {
    expect(component.find({ 
      name: props.album.name,
      description: props.album.description,
      tags: props.album.tags,
      photosIds: props.album.photosIds,
    }));
  });
});