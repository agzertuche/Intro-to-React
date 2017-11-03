import React from "react";
import { Heading, Slide, Text } from "spectacle";

export default (
  <Slide bgColor="primary">
    <Heading size={2}  lineHeight={1} textColor="secondary">
      State
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={1}>
      State allows us to receive/work with changeable data
      Set initial state in constructor
      Do not update directly use setState
      Updates are merged

    </Text>
  </Slide>
);