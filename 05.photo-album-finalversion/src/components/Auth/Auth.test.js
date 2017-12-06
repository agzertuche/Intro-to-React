/* global describe, it, shallow */
import React from 'react';
import { SignIn, SignOut } from '../Auth';

describe('Auth', () => {
  it('renders without crashing', () => {
    shallow(<SignIn />);
    shallow(<SignOut />);
  });
});