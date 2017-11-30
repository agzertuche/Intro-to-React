import React from "react";
import { Heading, Slide, Text, CodePane, List, ListItem } from "spectacle";

const code =
` function todoApp(state = initialState, action) {
  switch (action.type) {
    ...
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }]
        })
    default:
      return state
....`;

export default (
  <Slide bgColor="primary">
    <Heading size={2} lineHeight={1} textColor="secondary">
      Reducers
    </Heading>
    <Text textAlign="left" textSize="1em" margin="20px 0 0 0" textColor="tertiary">
      The application's state changes is the job of reducers.
    </Text>
    <List margin="10px 0 0 0" textColor="tertiary">      
      <ListItem textSize="1em">Don't mutate the state</ListItem>
      <ListItem textSize="1em">Return previous state in the default case</ListItem>
      <ListItem textSize="1em">Reducers must be pure functions</ListItem>
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
