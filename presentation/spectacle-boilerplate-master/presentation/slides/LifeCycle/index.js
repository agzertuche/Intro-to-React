import React from "react";
import { Heading, Slide, Text, List, ListItem } from "spectacle";

export default (
  <Slide bgColor="primary">
    <Heading size={3} lineHeight={1} textColor="secondary">
      Components Life Cycle
    </Heading>
    <Text textAlign="left" margin="10px 0 0" textColor="tertiary" size={1}>
      In applications with many components, it’s very important to free up resources taken by the components when they are destroyed.
    </Text>
    <List textColor="tertiary">
      <ListItem textSize="1em">componentWillMount</ListItem>
      <ListItem textSize="1em">componentDidMount</ListItem>
      <ListItem textSize="1em">componentWillReceiveProps</ListItem>
      <ListItem textSize="1em">shouldComponentUpdate</ListItem>
      <ListItem textSize="1em">componentWillUpdate</ListItem>
      <ListItem textSize="1em">componentDidUpdate</ListItem>
      <ListItem textSize="1em">componentWillUnmount</ListItem>
      <ListItem textSize="1em">render</ListItem>
    </List>
  </Slide>
);
