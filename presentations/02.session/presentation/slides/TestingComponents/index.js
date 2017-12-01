import React from "react";
import { Heading, Slide, CodePane } from "spectacle";

const code =
` 
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
`;

export default (
  <Slide bgColor="primary">
    <Heading size={2} lineHeight={1} textColor="secondary">
      Testing Components
    </Heading>
    <CodePane
      lang="jsx"
      source={code}
      margin="20px auto"
      overflow="overflow"
      textSize="0.8em"
    />
  </Slide>
);
