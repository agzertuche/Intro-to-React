import React from "react";
import { Heading, Slide, Text, List, ListItem } from "spectacle";

export default (
  <Slide bgColor="primary">
    <Heading size={2} lineHeight={1} textColor="secondary">
      Why Jest?
    </Heading>
    <Text textAlign="left" textSize="1em" margin="20px 0 30px 0" textColor="tertiary">
      Jest is used by Facebook to test all JavaScript code including React applications.
    </Text>
    <Text textAlign="left" textSize="1em" margin="20px 0 30px 0" textColor="tertiary">
      Jest always run in a Node environment and not in a real browser. This lets us enable fast iteration speed and prevent flakiness.
    </Text>
    <List margin="10px 0 30px 0" textColor="tertiary">      
      <ListItem textSize="1em">Zero configuration</ListItem>
      <ListItem textSize="1em">Built-in code coverage reports</ListItem>
      <ListItem textSize="1em">Snapshot Testing</ListItem>
    </List>
  </Slide>
);
