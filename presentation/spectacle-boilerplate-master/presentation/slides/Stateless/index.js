import React from "react";
import { Heading, Slide, Text, Link, CodePane, Appear } from "spectacle";

const code =
`const DisplayForm = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
}`;

export default (
  <Slide bgColor="primary">
    <Heading size={3} lineHeight={1} textColor="secondary">
      Stateless Component
    </Heading>
    <Text textSize="1em" margin="10px 0 0" textColor="tertiary">
      Avoid mutating data
      Easy unit testing
      It can be easily tested with mocked data
      It can be re-used multiple times to perform the role it has been given
      It has a defined input (function arguments)
      It has a defined output (return statement with new data)
    </Text>
    <CodePane
      lang="jsx"
      source={code}
      margin="20px auto"
      overflow="overflow"
      textSize="1em"
    />
  </Slide>
);