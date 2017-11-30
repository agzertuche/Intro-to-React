import React from "react";
import { Heading, Slide, Text, CodePane, Notes } from "spectacle";

const code =
` import { ADD_TODO } from '../actionTypes'
  ....
  function addTodo(text) {
    return {
      type: ADD_TODO,
      text
    }
  }
`;

export default (
  <Slide bgColor="primary">
    <Heading size={2} lineHeight={1} textColor="secondary">
      Actions
    </Heading>
    <Text textAlign="left" textSize="1em" margin="20px 0 0 0" textColor="tertiary">
      Actions are payloads of information that send data from your application to your store.
    </Text>
    <Text textAlign="left" textSize="1em" margin="20px 0 0 0" textColor="tertiary">
      Action creators are functions that create actions
    </Text>    
    <CodePane
      lang="jsx"
      source={code}
      margin="20px auto"
      overflow="overflow"
      textSize="0.6em"
    />
    <Notes>
      They are the only source of information for the store. You send them to the store using store.dispatch().
    </Notes>
  </Slide>
);
