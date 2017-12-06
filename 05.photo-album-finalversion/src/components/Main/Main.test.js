/* global describe, it, expect, mount */
import React from 'react';
import Main from './Main';
import { MemoryRouter } from 'react-router';
import { Message } from 'semantic-ui-react'
import { AlbumList } from '../Album/AlbumList';
import { PhotoList } from '../Photo/PhotoList';
import Auth from '../Auth';

const setup = (path) => {
  const component = mount(
    <MemoryRouter initialEntries={[ path ]}>
      <Main/>
    </MemoryRouter>
  );

  return {
    component,
  }
}

describe('Main', () => {
  it('should render page not found', () => {
    const { component } = setup('/asdf');
    expect(component.find(Message)).toHaveLength(1);
  });

  it('should render landing page', () => {
    const { component } = setup('/');
    expect(component.find(Auth)).toHaveLength(1);
  });

  // it('should render albums page', () => {
  //   const { component } = setup('/albums');
  //   expect(component.find(AlbumList)).toHaveLength(1);
  // });

  // it('should render photos page', () => {
  //   const { component } = setup('/photos');
  //   expect(component.find(PhotoList)).toHaveLength(1);
  // });

  it('should render auth page', () => {
    const { component } = setup('/auth');
    expect(component.find(Auth)).toHaveLength(1);
  });
});