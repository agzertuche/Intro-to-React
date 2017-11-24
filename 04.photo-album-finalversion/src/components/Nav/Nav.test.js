import React from 'react';
import Nav from '../Nav';

function setup() {
  const props = {}

  const enzymeWrapper = shallow(<Nav {...props} />);

  return {
    props,
    enzymeWrapper
  }
}

describe('Nav', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup();
    const firstElement = enzymeWrapper.find('div').first();

    console.log(enzymeWrapper);
    console.log(firstElement);
    expect(enzymeWrapper.find('a').first().hasClass('item')).toBe(true);
  });
});