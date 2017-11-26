/* global describe, it, shallow */
import React from 'react';
import Login from '../Login';

describe('Login', () => {
  it('renders without crashing', () => {
    shallow(<Login />);
  });
});