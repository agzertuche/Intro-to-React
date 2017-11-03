import React from "react";
import { Heading, Slide, Text, List, ListItem } from "spectacle";

export default (
  <Slide bgColor="primary">
    <Heading size={2} lineHeight={1} textColor="secondary">
      Tooling
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={1}>
    </Text>
    <List textColor="tertiary">
      <ListItem>NodeJS</ListItem>
      <ListItem>NPM</ListItem>
      <ListItem>Code Editor (VSCode recommended)</ListItem>
      <ListItem>Modern Browser</ListItem>
    </List>
  </Slide>
);