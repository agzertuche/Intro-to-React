import React from "react";
import { Heading, Slide, Text } from "spectacle";

export default (
  <Slide bgColor="primary">
    <Heading size={2}  lineHeight={1} textColor="secondary">
      Render
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={1}>
      React components implement a render() method that takes input data and returns what to display.
      Re-Render don't mutate
      	- Conditional rendering
        Nested components
        https://reactjs.org/docs/rendering-elements.html
    </Text>
  </Slide>
);