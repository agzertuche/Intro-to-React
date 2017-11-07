import React from "react";
import { Heading, Slide, List, ListItem } from "spectacle";

export default (
  <Slide bgColor="primary">
    <Heading size={2} lineHeight={1} textColor="secondary">
      What is React?
    </Heading>
    <List textColor="tertiary">
      <ListItem>Library, not a Framework</ListItem>
      <ListItem>Declarative</ListItem>
      <ListItem>Component-Based</ListItem>
      <ListItem>One-way data flow</ListItem>
      <ListItem>Virtual DOM</ListItem>
    </List>
  </Slide>
);
