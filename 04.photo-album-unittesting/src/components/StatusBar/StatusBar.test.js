/* global describe, it, expect, mount */
import React from 'react';
import StatusBar from '../StatusBar';

const setup = () => {
  const props = {
    title: 'title of status bar',
    children: 
    <div className='my-button'>
      <button>my button</button>
    </div>
  }

  const enzymeWrapper = mount(
    <StatusBar title={props.title}>
      props.children
    </StatusBar>
  );

  return {
    props,
    enzymeWrapper
  }
}

describe('StatusBar', () => {
  it('renders self and subcomponents', () => {
    const { enzymeWrapper, props } = setup();

    expect(enzymeWrapper.find('.status-bar').exists()).toEqual(true);

    expect(enzymeWrapper.find({ title: props.title }));
  });
});