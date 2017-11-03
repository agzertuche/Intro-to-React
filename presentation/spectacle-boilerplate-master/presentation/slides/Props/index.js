import React from "react";
import { Heading, Slide, Text } from "spectacle";

export default (
  <Slide bgColor="primary">
    <Heading size={2}  lineHeight={1} textColor="secondary">
      Props
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={1}>
      Using props to pass data to your components
Props are read-only
- Use state for storing data within the component
          - Use props to pass data and events to a child component

          	- Avoid changing-state
          - Avoid mutable data
    </Text>
  </Slide>
);