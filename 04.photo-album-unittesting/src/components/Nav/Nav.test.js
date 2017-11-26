/* global describe, it, shallow */
import React from 'react';
import Nav from '../Nav';

describe('Nav', () => {
  it('renders without crashing', () => {
    shallow(<Nav />);
  });
});