import React from "react";
import { Heading, Slide, CodePane, List, ListItem } from "spectacle";

const code =
`const Greetings = (props) => {
  return (
    <div>
      <h1>\`Good morning \${props.name}\!\`</h1>
    </div>
  );
}`;

export default (
  <Slide bgColor="primary">
    <Heading size={3} lineHeight={1} textColor="secondary">
      Stateless Component
    </Heading>
    <List margin="10px 0 0" textColor="tertiary">
      <ListItem textSize="0.9em">Avoid mutating data</ListItem>
      <ListItem textSize="0.9em">Easy to understand</ListItem>
      <ListItem textSize="0.9em">Easy to test</ListItem>
      <ListItem textSize="0.9em">No 'this' keyword</ListItem>
      <ListItem textSize="0.9em">Improve performance</ListItem>
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
