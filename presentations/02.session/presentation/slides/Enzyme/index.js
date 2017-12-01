import React from "react";
import { Heading, Slide, Text, List, ListItem } from "spectacle";

export default (
  <Slide bgColor="primary">
    <Heading size={2} lineHeight={1} textColor="secondary">
      Enzyme
    </Heading>
    <Text textAlign="left" textSize="1em" margin="20px 0 30px 0" textColor="tertiary">
      Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output.
    </Text>
    <List margin="10px 0 0" textSize="0.8em" textColor="tertiary">      
    <ListItem bold>Shallow</ListItem>
    <p>Testing a component as a unit, and to ensure that your tests aren't indirectly asserting on behavior of child components</p>
    <ListItem bold >Mount</ListItem>
    <p>Full DOM rendering is ideal for use cases where you have components that may interact with DOM APIs</p>
    <ListItem bold >Render</ListItem>
    <p>used to render react components to static HTML and analyze the resulting HTML structure</p>
  </List>
  </Slide>
);
