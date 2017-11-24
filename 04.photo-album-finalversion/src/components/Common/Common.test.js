import React from 'react';
import renderer from 'react-test-renderer';
import { DeleteButton } from '../Common';

describe('Common', () => {
  it('Delete button snapshot test', () => {
    const tree = renderer.create(
      <DeleteButton 
        index="My index object" 
        objectName="My object name"
        deleteObject={() => console.log()}
      />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});