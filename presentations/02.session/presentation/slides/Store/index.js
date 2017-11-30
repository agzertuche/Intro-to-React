import React from "react";
import { Heading, Slide, Text, CodePane, List, ListItem } from "spectacle";

const code =
` 
import { createStore } from 'redux'
import todoApp from './reducers'
let store = createStore(todoApp)

`;

export default (
  <Slide bgColor="primary">
    <Heading size={2} lineHeight={1} textColor="secondary">
      Store
    </Heading>
    <Text textAlign="left" textSize="1em" margin="20px 0 30px 0" textColor="tertiary">
      The Store is the object that brings actions and reducers together, note that you'll only have a single store in a Redux application.
    </Text>
    <List margin="10px 0 30px 0" textColor="tertiary">      
      <ListItem textSize="1em">Holds application state;</ListItem>
      <ListItem textSize="1em">Allows access to state via getState();</ListItem>
      <ListItem textSize="1em">Allows state to be updated via dispatch(action);</ListItem>
      <ListItem textSize="1em">Registers listeners via subscribe(listener);</ListItem>
    </List>
    <CodePane
      lang="jsx"
      source={code}
      margin="20px auto"
      overflow="overflow"
      textSize="0.6em"
    />
  </Slide>
);
