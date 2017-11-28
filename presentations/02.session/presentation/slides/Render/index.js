import React from "react";
import { Heading, Slide, Text, List, ListItem, CodePane } from "spectacle";

const conditionalRender =
` {unreadMessages.length > 0 &&
    <h2>
      You have {unreadMessages.length} unread messages.
    </h2>
  }`;

const reRender =
` return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );`;

export default (
  <Slide bgColor="primary">
    <Heading size={2} lineHeight={1} textColor="secondary">
      Render
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={1}>
      React components implement a render() method that takes input data and returns what to display
    </Text>
    <List textColor="tertiary">
      <ListItem textSize="0.9em">Re-Render don't mutate</ListItem>
      <ListItem textSize="0.9em">Conditional rendering</ListItem>
      <CodePane
        lang="jsx"
        source={conditionalRender}
        margin="20px auto"
        overflow="overflow"
        textSize="0.6em"
      />
      <ListItem textSize="0.9em">Nested components</ListItem>
      <CodePane
        lang="jsx"
        source={reRender}
        margin="20px auto"
        overflow="overflow"
        textSize="0.6em"
      />
    </List>
  </Slide>
);
