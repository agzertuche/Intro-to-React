/* global describe, it, expect, shallow */
import React from 'react';
import { PhotoList } from './PhotoList';

const setup = () => {
  const props = {
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
    },
  }

  const component = shallow(
    <PhotoList 
      photos={props.photos} 
      deletePhoto={() => {}}
    />
  ); 

  return {
    component,
    props,
  }
}

describe('PhotoList', () => {
  const { component, props } = setup();

  it('should render all photos', () => {
    expect(component.find('Photo').length)
      .toEqual(Object.keys(props.photos).length);
  });
});