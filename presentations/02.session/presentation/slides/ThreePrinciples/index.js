import React from "react";
import { Heading, Slide, Notes, List, ListItem } from "spectacle";

export default (
  <Slide bgColor="primary">
    <Heading size={2} lineHeight={1} textColor="secondary">
      Three Principles
    </Heading>
    <List margin="10px 0 0" textColor="tertiary">      
      <ListItem bold textSize="1.3em">Single source of truth</ListItem>
      <p>The state is stored in an object tree within a single store.</p>
      <ListItem bold textSize="1.3em">State is read-only</ListItem>
      <p>The only way to change the state is to emit an action.</p>
      <ListItem bold textSize="1.3em">Changes are made with pure functions</ListItem>
      <p>The state tree is transformed by actions, you write pure reducers.</p>
    </List>
  </Slide>
);
