import React from "react";
import { Heading, Slide, Text, List, ListItem, CodePane } from "spectacle";

const state =
`...
  class NewForm extends React.Component {
    state = {
      name: '',
      age: 0,
    }
...`;

const setState =
`...
  this.setState({
    name: 'John Smith',
    age: 40,
  });
...`;

export default (
  <Slide bgColor="primary">
    <Heading size={2} lineHeight={1} textColor="secondary">
      State
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={1}>
      State allows us to work with changeable data
    </Text>
    <List textColor="tertiary">
      <ListItem textSize="0.9em">State updates are merged</ListItem>
      <ListItem textSize="0.9em">Set initial state in constructor</ListItem>
      <CodePane
        lang="jsx"
        source={state}
        margin="20px auto"
        overflow="overflow"
        textSize="0.6em"
      />
      <ListItem textSize="0.9em">Do not update directly, use setState</ListItem>
      <CodePane
        lang="jsx"
        source={setState}
        margin="20px auto"
        overflow="overflow"
        textSize="0.6em"
      />
    </List>
  </Slide>
);
