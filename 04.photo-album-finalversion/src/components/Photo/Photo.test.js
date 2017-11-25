/* global describe, it, expect, shallow */
import React from 'react';
import Photo from '../Photo';

const setup = () => {
  const props = {
    photo: {
      title: 'Photo name',
      description: 'Photo description',
      url: 'https://source.unsplash.com/1600x900/?happy',
    },
  children: 'Text child',
  }

  const component = shallow(
    <Photo photo={props.photo}>
      { props.children } 
    </Photo>
  );

  return {
    component,
    props,
  }
}

describe('Photo', () => {
  const { component, props } = setup();

  it('renders all properties', () => {
    expect(component.find({ 
      title: props.photo.title,
      description: props.photo.description,
      url: props.photo.url,
    }));
  });

  it('should render a div with photo class', () => {
    expect(component.find('.photo'));
  });
});