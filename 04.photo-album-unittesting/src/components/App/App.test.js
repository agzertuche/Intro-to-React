/* global describe, it, expect, shallow */
import React from 'react';
import App from './App';
import configureStore from '../../store/configureStore';

const store = configureStore();
describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App store={store} />);
  });

  it('to contains anything', () => {
    const app = <App store={store} />;
    expect.anything(app);
  });
});