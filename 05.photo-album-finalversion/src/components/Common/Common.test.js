/* global describe, it, expect, renderer */
import React from 'react';
import { DeleteButton } from '../Common';

describe('Common', () => {
  it('Delete button snapshot test', () => {
    const tree = renderer.create(
      <DeleteButton 
        index="My index object" 
        objectName="My object name"
        deleteObject={() => {}}
      />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});