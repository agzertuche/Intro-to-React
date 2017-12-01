import React from "react";
import { Heading, Slide, Text, CodePane, List, ListItem } from "spectacle";

const code =
`npm test`;

export default (
  <Slide bgColor="primary">
    <Heading size={2} lineHeight={1} textColor="secondary">
      Running Tests
    </Heading>
    <Text textAlign="left" textSize="1em" margin="20px 0 30px 0" textColor="tertiary">
     Jest will look for test files with any of the following popular naming conventions:
    </Text>
    <List margin="10px 0 30px 0" textColor="tertiary">      
      <ListItem textSize="1em">Files with .js suffix in __tests__ folders</ListItem>
      <ListItem textSize="1em">Files with .test.js suffix</ListItem>
      <ListItem textSize="1em">Files with .spec.js suffix</ListItem>
    </List>
    <CodePane
      lang="jsx"
      source={code}
      margin="20px auto"
      overflow="overflow"
      textSize="1em"
    />
  </Slide>
);
