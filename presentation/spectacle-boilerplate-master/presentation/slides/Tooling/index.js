import React from "react";
import { Heading, Slide, List, ListItem } from "spectacle";

export default (
  <Slide bgColor="primary">
    <Heading size={2} lineHeight={1} textColor="secondary">
      Tooling
    </Heading>
    <List textColor="tertiary">
      <ListItem>NodeJS</ListItem>
      <ListItem>NPM</ListItem>
      <ListItem>Code Editor (VSCode recommended)</ListItem>
      <ListItem>Modern Browser</ListItem>
      <ListItem>React Developer Tools</ListItem>
    </List>
  </Slide>
);
